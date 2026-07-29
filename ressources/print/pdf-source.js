(() => {
  const locale = document.documentElement.lang || "fr";
  const labels = {
    fr: {
      traceability: "Traçabilité",
      activityLink: "Page de l'activité, mises à jour et crédits en ligne",
    },
    en: {
      traceability: "Traceability",
      activityLink: "Activity page, updates and online credits",
    },
    de: {
      traceability: "Nachvollziehbarkeit",
      activityLink: "Aktivitätsseite, Aktualisierungen und Online-Bildnachweise",
    },
    it: {
      traceability: "Tracciabilità",
      activityLink: "Pagina dell'attività, aggiornamenti e crediti online",
    },
  };
  const allowedOutputs = new Set(["fiche", "guide", "supports", "corrige", "kit"]);
  const params = new URLSearchParams(window.location.search);
  const requested = allowedOutputs.has(params.get("doc")) ? params.get("doc") : "kit";
  const documents = [...document.querySelectorAll("[data-document]")];

  document.body.dataset.output = requested;

  documents.forEach((documentSection) => {
    const belongsToKit = requested === "kit";
    const isRequested = documentSection.dataset.document === requested;
    documentSection.hidden = !(belongsToKit || isRequested);
  });

  const visibleTitle = requested === "kit"
    ? document.body.dataset.kitTitle
    : documents.find((section) => section.dataset.document === requested)?.dataset.title;

  if (visibleTitle) document.title = `${visibleTitle} | Histoires d'os`;

  const pageCount = params.get("pages");
  if (pageCount && /^\d+$/.test(pageCount)) {
    document.querySelectorAll("[data-kit-pages]").forEach((node) => {
      node.textContent = `${pageCount} pages`;
    });
  }

  const activityPages = {
    "activity-01": "activite-01-trouver-astragale.html",
    "activity-02": "activite-02-associer-astragale-animal.html",
    "activity-03": "activite-03-achille-histoire-transformee.html",
    "activity-04": "activite-04-un-os-plusieurs-vies.html",
  };
  const activityClass = Object.keys(activityPages).find((className) => document.body.classList.contains(className));
  const activityPage = activityClass ? activityPages[activityClass] : null;
  const localizedLabels = labels[locale] || labels.fr;

  if (activityPage) {
    const linkTargets = requested === "kit"
      ? documents.filter((section) => section.dataset.document === "sources")
      : documents.filter((section) => !section.hidden);
    linkTargets.forEach((section) => {
      const inlineTarget = requested === "fiche" ? section.querySelector(".pdf-callout:last-of-type") : null;
      const traceability = document.createElement(inlineTarget ? "span" : "div");
      traceability.className = inlineTarget ? "pdf-resource-link-inline" : "pdf-resource-link";
      const link = document.createElement("a");
      const languagePrefix = locale === "fr" ? "" : `/${locale}`;
      link.href = `https://histoire-d-os.github.io/Histoire-d-os${languagePrefix}/ressources/${activityPage}`;
      link.textContent = localizedLabels.activityLink;
      traceability.append(`${localizedLabels.traceability} : `, link, ".");
      (inlineTarget || section).append(traceability);
    });
  }

  documents.forEach((documentSection) => {
    if (documentSection.dataset.document === "cover") return;
    let currentBlock = null;
    [...documentSection.children].forEach((child) => {
      if (child.matches("h2")) {
        currentBlock = document.createElement("div");
        currentBlock.className = "pdf-content-block";
        if (child.classList.contains("page-break-before")) {
          currentBlock.classList.add("page-break-before");
          child.classList.remove("page-break-before");
        }
        documentSection.insertBefore(currentBlock, child);
        currentBlock.append(child);
      } else if (currentBlock) {
        currentBlock.append(child);
      }
    });
  });

  document.documentElement.dataset.pdfReady = "true";
})();
