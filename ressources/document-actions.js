const actionBlocks = document.querySelectorAll(".document-actions");
const printButtons = document.querySelectorAll("[data-print-document]");

const cleanText = (value) => value?.replace(/\s+/g, " ").trim();
const stripStatusLabel = (value) => cleanText(value)?.replace(/^Statut\s*:\s*/i, "");

const findNearbyStatus = (actions) => {
  const explicitStatus = actions.dataset.documentStatus;
  if (explicitStatus) return cleanText(explicitStatus);

  const main = actions.closest("main");
  const statusNote = main?.querySelector(".status-note");
  return stripStatusLabel(statusNote?.textContent);
};

const appendMetaItem = (list, label, value) => {
  if (!value) return;

  const item = document.createElement("li");
  const labelElement = document.createElement("strong");
  labelElement.textContent = `${label} : `;
  item.append(labelElement, document.createTextNode(value));
  list.append(item);
};

actionBlocks.forEach((actions) => {
  if (actions.querySelector(".document-meta-strip")) return;

  const list = document.createElement("ul");
  list.className = "document-meta-strip";
  list.setAttribute("aria-label", "Statut du document");

  appendMetaItem(list, "Statut", findNearbyStatus(actions) || "document à vérifier");
  appendMetaItem(list, "Version", actions.dataset.documentVersion || "v0.1");
  appendMetaItem(list, "Date", actions.dataset.documentDate || "2026-06-11");

  actions.append(list);
});

printButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.print();
  });
});

const previewDialogs = document.querySelectorAll("[data-document-preview]");

previewDialogs.forEach((dialog) => {
  const frame = dialog.querySelector("[data-preview-frame]");
  const title = dialog.querySelector("[data-preview-title]");
  const tabs = dialog.querySelector("[data-preview-tabs]");
  const externalLink = dialog.querySelector("[data-preview-external]");
  const closeButton = dialog.querySelector("[data-preview-close]");
  let opener = null;

  if (!frame || !title || !tabs || !externalLink || !closeButton) return;

  const chooseDocument = (link, button) => {
    const href = link.getAttribute("href");
    const label = cleanText(link.textContent) || "Document";
    if (!href) return;

    title.textContent = label;
    frame.setAttribute("src", href);
    frame.setAttribute("title", `Aperçu PDF : ${label}`);
    externalLink.setAttribute("href", href);
    externalLink.textContent = `Ouvrir « ${label} » dans un nouvel onglet`;

    tabs.querySelectorAll("button").forEach((tab) => {
      tab.setAttribute("aria-pressed", String(tab === button));
    });
  };

  const closePreview = () => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };

  closeButton.addEventListener("click", closePreview);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closePreview();
  });

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePreview();
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    closePreview();
  });

  dialog.addEventListener("close", () => {
    frame.setAttribute("src", "about:blank");
    opener?.focus();
  });

  document.querySelectorAll(`[data-preview-documents="${dialog.id}"]`).forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-activity-card]");
      const links = card?.querySelectorAll("[data-preview-file]") || [];
      if (!links.length) return;

      opener = button;
      tabs.replaceChildren();

      links.forEach((link, index) => {
        const tab = document.createElement("button");
        tab.type = "button";
        tab.className = "document-preview-tab";
        tab.textContent = cleanText(link.textContent) || `Document ${index + 1}`;
        tab.setAttribute("aria-pressed", "false");
        tab.addEventListener("click", () => chooseDocument(link, tab));
        tabs.append(tab);
        if (index === 0) chooseDocument(link, tab);
      });

      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      closeButton.focus();
    });
  });
});
