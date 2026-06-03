const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const glossarySearch = document.querySelector("#glossary-search");
const glossaryItems = document.querySelectorAll("[data-glossary-list] article");
const emptyState = document.querySelector("[data-empty-state]");
const languageSelect = document.querySelector("[data-language-select]");
const year = document.querySelector("[data-year]");
const supportedLanguages = new Set(["fr", "de", "it", "en"]);

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  header.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
});

const applyLanguage = (language) => {
  const nextLanguage = supportedLanguages.has(language) ? language : "fr";
  document.documentElement.lang = nextLanguage;
  document.documentElement.dataset.activeLanguage = nextLanguage;
  languageSelect.value = nextLanguage;
  localStorage.setItem("histoire-os-language", nextLanguage);
};

applyLanguage(localStorage.getItem("histoire-os-language") || "fr");

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });

    tabPanels.forEach((panel) => {
      const isTarget = panel.dataset.panel === target;
      panel.classList.toggle("is-active", isTarget);
      panel.hidden = !isTarget;
    });
  });
});

glossarySearch.addEventListener("input", () => {
  const query = glossarySearch.value.trim().toLocaleLowerCase("fr");
  let visibleCount = 0;

  glossaryItems.forEach((item) => {
    const text = `${item.textContent} ${item.dataset.term}`.toLocaleLowerCase("fr");
    const isVisible = text.includes(query);
    item.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount > 0;
});

year.textContent = new Date().getFullYear();
