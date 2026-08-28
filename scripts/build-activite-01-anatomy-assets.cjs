const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const assetDirectory = path.join(root, "assets", "images", "activite-01");

const sources = {
  lateral: path.join(assetDirectory, "talus-humain-vue-laterale-bodyparts3d.png"),
  anterolateral: path.join(assetDirectory, "talus-humain-vue-anterolaterale-bodyparts3d.png"),
};

const generated = {
  neutral: path.join(assetDirectory, "talus-humain-vue-laterale-neutre-bodyparts3d.png"),
  isolatedLateral: path.join(assetDirectory, "talus-isole-vue-laterale-bodyparts3d.png"),
  isolatedAnterolateral: path.join(assetDirectory, "talus-isole-vue-anterolaterale-bodyparts3d.png"),
};

function isTalusHighlight(red, green, blue, alpha) {
  return alpha > 20 && red > 35 && red > green + 18 && red > blue + 15;
}

function largestConnectedComponent(mask, width, height) {
  const visited = new Uint8Array(mask.length);
  let largest = [];
  for (let start = 0; start < mask.length; start += 1) {
    if (!mask[start] || visited[start]) continue;
    const queue = [start];
    const component = [];
    visited[start] = 1;
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const index = queue[cursor];
      component.push(index);
      const x = index % width;
      const y = Math.floor(index / width);
      const neighbours = [];
      if (x > 0) neighbours.push(index - 1);
      if (x + 1 < width) neighbours.push(index + 1);
      if (y > 0) neighbours.push(index - width);
      if (y + 1 < height) neighbours.push(index + width);
      for (const neighbour of neighbours) {
        if (mask[neighbour] && !visited[neighbour]) {
          visited[neighbour] = 1;
          queue.push(neighbour);
        }
      }
    }
    if (component.length > largest.length) largest = component;
  }
  return new Set(largest);
}

async function derive(source, neutralDestination, isolatedDestination) {
  const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const neutral = Buffer.from(data);
  const isolated = Buffer.alloc(data.length);
  const mask = new Uint8Array(info.width * info.height);
  for (let pixel = 0; pixel < mask.length; pixel += 1) {
    const index = pixel * 4;
    mask[pixel] = isTalusHighlight(data[index], data[index + 1], data[index + 2], data[index + 3]) ? 1 : 0;
  }
  const isolatedPixels = largestConnectedComponent(mask, info.width, info.height);
  let left = info.width;
  let top = info.height;
  let right = 0;
  let bottom = 0;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const index = (y * info.width + x) * 4;
      const red = data[index];
      const green = data[index + 1];
      const blue = data[index + 2];
      const alpha = data[index + 3];
      const pixel = y * info.width + x;
      if (!mask[pixel]) continue;

      const neutralShade = Math.min(246, 178 + Math.round(red * 0.27));
      neutral[index] = neutralShade;
      neutral[index + 1] = neutralShade;
      neutral[index + 2] = neutralShade;

      if (isolatedPixels.has(pixel)) {
        const isolatedShade = Math.min(225, 112 + Math.round(red * 0.48));
        isolated[index] = isolatedShade;
        isolated[index + 1] = isolatedShade;
        isolated[index + 2] = isolatedShade;
        isolated[index + 3] = alpha;
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }

  if (left > right || top > bottom) throw new Error(`Surlignage du talus introuvable dans ${source}`);

  if (neutralDestination) {
    await sharp(neutral, { raw: info }).png({ compressionLevel: 9 }).toFile(neutralDestination);
  }

  const padding = 18;
  const cropLeft = Math.max(0, left - padding);
  const cropTop = Math.max(0, top - padding);
  const cropWidth = Math.min(info.width - cropLeft, right - left + 1 + padding * 2);
  const cropHeight = Math.min(info.height - cropTop, bottom - top + 1 + padding * 2);
  await sharp(isolated, { raw: info })
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .png({ compressionLevel: 9 })
    .toFile(isolatedDestination);
}

function inlineImages(svgText) {
  return svgText.replace(/href="([^"]+\.png)"/g, (_match, fileName) => {
    const data = fs.readFileSync(path.join(assetDirectory, fileName)).toString("base64");
    return `href="data:image/png;base64,${data}"`;
  });
}

async function rasterize(svgName, width, height) {
  const svgPath = path.join(assetDirectory, svgName);
  const pngPath = svgPath.replace(/\.svg$/i, ".png");
  const source = inlineImages(fs.readFileSync(svgPath, "utf8"));
  await sharp(Buffer.from(source), { density: 144 })
    .resize(width, height)
    .png({ compressionLevel: 9 })
    .toFile(pngPath);
}

(async () => {
  await derive(sources.lateral, generated.neutral, generated.isolatedLateral);
  await derive(sources.anterolateral, null, generated.isolatedAnterolateral);
  await rasterize("silhouette-os-enquete.svg", 900, 600);
  await rasterize("schema-pied-enquete.svg", 1200, 700);
  await rasterize("schema-localisation-talus.svg", 1200, 700);
  console.log("Ressources anatomiques dérivées de BodyParts3D générées pour l'activité 1.");
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
