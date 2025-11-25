// ===== AUTH TAB SWITCH =====
const authTabs = document.querySelectorAll(".auth-tab");
const authPanels = document.querySelectorAll(".auth-panel");

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    authTabs.forEach((t) => t.classList.remove("active"));
    authPanels.forEach((panel) => {
      panel.classList.remove("active");
      if (panel.dataset.panel === target) {
        panel.classList.add("active");
      }
    });

    tab.classList.add("active");
  });
});

// ===== SIGN IN / SIGN UP SUBMIT (demo) =====
const authForms = document.querySelectorAll(".auth-panel");
const authSection = document.getElementById("auth");
const mainApp = document.getElementById("mainApp");

authForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Hanya untuk demo, langsung masuk ke app
    authSection.classList.add("hidden");
    mainApp.classList.remove("hidden");
  });
});

// ===== PAGE NAVIGATION (sidebar & topnav) =====
const pages = document.querySelectorAll(".page");
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const topnavLinks = document.querySelectorAll(".topnav-link");

function showPage(pageName) {
  pages.forEach((p) => {
    p.classList.toggle("active", p.dataset.page === pageName);
  });

  sidebarLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageName);
  });

  topnavLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageName);
  });
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showPage(link.dataset.page);
  });
});

topnavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showPage(link.dataset.page);
  });
});

// ===== FILTER HARIAN / MINGGUAN / BULANAN =====
const filterTabs = document.querySelectorAll(".filter-tab");
const priceElements = document.querySelectorAll(".row-price");

function updatePrices(mode) {
  priceElements.forEach((el) => {
    const value = el.dataset[mode];
    if (value) el.textContent = value;
  });
}

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const mode = tab.dataset.mode; // "harian" | "mingguan" | "bulanan"
    updatePrices(mode);
  });
});

// default
updatePrices("harian");
