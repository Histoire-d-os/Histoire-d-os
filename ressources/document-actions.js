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
