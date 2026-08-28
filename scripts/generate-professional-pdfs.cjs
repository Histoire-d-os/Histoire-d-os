const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawnSync } = require("child_process");
const Module = require("module");

const root = path.resolve(__dirname, "..");
const bundledNodeModules = path.join(
  process.env.USERPROFILE || "",
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies",
  "node",
  "node_modules"
);

const bundledPnpmModules = path.join(bundledNodeModules, ".pnpm", "node_modules");

if (!process.env.NODE_PATH && fs.existsSync(bundledNodeModules)) {
  process.env.NODE_PATH = [bundledNodeModules, bundledPnpmModules]
    .filter((candidate) => fs.existsSync(candidate))
    .join(path.delimiter);
  Module._initPaths();
}

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (error) {
  throw new Error(
    "Playwright est introuvable. Installez-le localement ou définissez NODE_PATH vers son dossier node_modules.",
    { cause: error }
  );
}

const locales = {
  fr: { directory: path.join(root, "ressources", "pdf"), pilot: "Version pilote", date: "20 juillet 2026" },
  en: { directory: path.join(root, "en", "ressources", "pdf"), pilot: "Pilot version", date: "20 July 2026" },
  de: { directory: path.join(root, "de", "ressources", "pdf"), pilot: "Pilotversion", date: "20. Juli 2026" },
  it: { directory: path.join(root, "it", "ressources", "pdf"), pilot: "Versione pilota", date: "20 luglio 2026" },
};

const activities = ["01", "02", "03", "04"];

function optionValue(name) {
  const prefix = `--${name}=`;
  return process.argv.slice(2).find((argument) => argument.startsWith(prefix))?.slice(prefix.length);
}

const requestedLanguage = optionValue("language");
const requestedActivity = optionValue("activity");
if (requestedLanguage && !Object.hasOwn(locales, requestedLanguage)) {
  throw new Error(`Langue inconnue : ${requestedLanguage}`);
}
if (requestedActivity && !activities.includes(requestedActivity)) {
  throw new Error(`Activité inconnue : ${requestedActivity}`);
}

const outputs = [
  { query: "fiche", file: "fiche-eleve", label: "Fiche élève" },
  { query: "guide", file: "guide-encadrement", label: "Guide d'encadrement" },
  { query: "supports", file: "supports", label: "Supports" },
  { query: "corrige", file: "corrige", label: "Corrigé" },
];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function safeFilePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^([/\\])+/, "");
  const candidate = path.resolve(root, normalized || "index.html");
  return candidate.startsWith(root) ? candidate : null;
}

function createStaticServer() {
  return http.createServer((request, response) => {
    const filePath = safeFilePath(request.url || "/");
    if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

function findPython() {
  const bundled = path.join(
    process.env.USERPROFILE || "",
    ".cache",
    "codex-runtimes",
    "codex-primary-runtime",
    "dependencies",
    "python",
    "python.exe"
  );
  if (fs.existsSync(bundled)) return bundled;
  for (const command of ["python", "python3"]) {
    const result = spawnSync(command, ["--version"], { encoding: "utf8" });
    if (result.status === 0) return command;
  }
  throw new Error("Python est requis pour finaliser les métadonnées PDF.");
}

function pythonOutput(python, args) {
  const result = spawnSync(python, args, { cwd: root, encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Échec Python : ${args.join(" ")}`);
  }
  return result.stdout.trim();
}

function headerTemplate() {
  return `
    <div style="box-sizing:border-box;width:100%;padding:0 14mm;color:#56605c;font:8px Arial,sans-serif;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-weight:700;">Histoires d'os</span>
      <span class="title" style="max-width:72%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"></span>
    </div>`;
}

function footerTemplate(locale, details = {}) {
  const labels = locales[locale];
  const status = details.status || labels.pilot;
  const date = details.date || labels.date;
  return `
    <div style="box-sizing:border-box;width:100%;padding:0 14mm;color:#56605c;font:8px Arial,sans-serif;display:flex;justify-content:space-between;align-items:center;">
      <span>${status} · ${date}</span>
      <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>`;
}

async function printPdf(page, url, destination, locale) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.documentElement.dataset.pdfReady === "true");
  await page.emulateMedia({ media: "print" });
  const footerDetails = await page.evaluate(() => ({
    status: document.body.dataset.footerStatus,
    date: document.body.dataset.revisionDate,
  }));
  await page.pdf({
    path: destination,
    format: "A4",
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: headerTemplate(),
    footerTemplate: footerTemplate(locale, footerDetails),
    margin: { top: "15mm", right: "14mm", bottom: "18mm", left: "14mm" },
    tagged: true,
    outline: true,
  });
}

(async () => {
  const temporaryDirectory = path.join(root, "tmp", "professional-pdf-build");
  fs.mkdirSync(temporaryDirectory, { recursive: true });

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;
  const python = findPython();
  const finalizer = path.join(root, "scripts", "finalize-professional-pdfs.py");
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  let generatedCount = 0;

  try {
    const selectedLocales = Object.entries(locales).filter(([locale]) => !requestedLanguage || locale === requestedLanguage);
    const selectedActivities = activities.filter((activityId) => !requestedActivity || activityId === requestedActivity);
    for (const [locale, settings] of selectedLocales) {
      const outputDirectory = settings.directory;
      fs.mkdirSync(outputDirectory, { recursive: true });
      for (const activityId of selectedActivities) {
        const localeSuffix = locale === "fr" ? "" : `.${locale}`;
        const sourcePath = `/ressources/print/pdf-sources/activite-${activityId}${localeSuffix}.html`;
        for (const output of outputs) {
          const destination = path.join(outputDirectory, `activite-${activityId}-${output.file}.pdf`);
          await printPdf(page, `${baseUrl}${sourcePath}?doc=${output.query}`, destination, locale);
          generatedCount += 1;
        }

        const draft = path.join(temporaryDirectory, `${locale}-activite-${activityId}-kit-complet-draft.pdf`);
        await printPdf(page, `${baseUrl}${sourcePath}?doc=kit`, draft, locale);
        const pageCount = pythonOutput(python, [finalizer, "--count", draft]);
        const kitDestination = path.join(outputDirectory, `activite-${activityId}-kit-complet.pdf`);
        await printPdf(page, `${baseUrl}${sourcePath}?doc=kit&pages=${pageCount}`, kitDestination, locale);
        generatedCount += 1;
      }
      const finalizerArguments = [finalizer, "--directory", outputDirectory, "--language", locale];
      if (requestedActivity) finalizerArguments.push("--activity", requestedActivity);
      pythonOutput(python, finalizerArguments);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
    fs.rmSync(temporaryDirectory, { recursive: true, force: true });
  }

  console.log(`${generatedCount} PDF générés.`);
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
