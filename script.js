const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");
const glossarySearch = document.querySelector("#glossary-search");
const glossaryItems = document.querySelectorAll("[data-glossary-list] article");
const emptyState = document.querySelector("[data-empty-state]");
const languageSelect = document.querySelector("[data-language-select]");
const backToTop = document.querySelector("[data-back-to-top]");
const year = document.querySelector("[data-year]");
const supportedLanguages = new Set(["fr", "de", "it", "en"]);

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setBackToTopState = () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 360);
};

setHeaderState();
setBackToTopState();
window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("scroll", setBackToTopState, { passive: true });

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

const readSavedLanguage = () => {
  try {
    return localStorage.getItem("histoire-os-language");
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    localStorage.setItem("histoire-os-language", language);
  } catch {
    // Local file previews can block storage; the selector should still work.
  }
};

const applyLanguage = (language) => {
  const nextLanguage = supportedLanguages.has(language) ? language : "fr";
  document.documentElement.lang = nextLanguage;
  document.documentElement.dataset.activeLanguage = nextLanguage;
  languageSelect.value = nextLanguage;
  saveLanguage(nextLanguage);
};

applyLanguage(readSavedLanguage() || "fr");

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

const activateTab = (target) => {
  tabButtons.forEach((item) => {
    const isSelected = item.dataset.tab === target;
    item.classList.toggle("is-active", isSelected);
    item.setAttribute("aria-selected", String(isSelected));
    item.tabIndex = isSelected ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isTarget = panel.dataset.panel === target;
    panel.classList.toggle("is-active", isTarget);
    panel.hidden = !isTarget;
  });
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });

  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();
    const currentIndex = [...tabButtons].indexOf(button);
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + offset + tabButtons.length) % tabButtons.length;
    const nextButton = tabButtons[nextIndex];
    nextButton.focus();
    activateTab(nextButton.dataset.tab);
  });
});

activateTab("ecole");

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
