// Tokyo Mistakes Theme JavaScript
// saved as main.js in tokyo-mistakes/assets/js
(function () {
  "use strict";

  // Theme Toggle Functionality (2-state: light/dark; colorful overlay is config-driven)

  function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    const themeIcon = themeToggle.querySelector("i");

    // Check if colorful mode is active from config
    const isColorfulConfig =
      document.documentElement.getAttribute("data-theme") === "colorful";

    function updateThemeIcon(theme) {
      if (!themeIcon) return;
      themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    function getBase() {
      const attr = document.documentElement.getAttribute("data-theme");
      // If colorful overlay was applied at load, data-theme might be "colorful"
      // Infer base using prefers-color-scheme when ambiguous.
      if (attr === "dark" || attr === "light") return attr;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    function toggleTheme() {
      // If we're in colorful mode from config, toggle between dark and light
      // but remember the user's preference
      if (isColorfulConfig) {
        // Get the current base or default to system preference
        const savedBase = localStorage.getItem("theme");
        const currentBase =
          savedBase ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");
        const nextBase = currentBase === "dark" ? "light" : "dark";

        // Save the preference but keep colorful active
        localStorage.setItem("theme", nextBase);
        updateThemeIcon(nextBase);

        // Notify listeners
        document.dispatchEvent(
          new CustomEvent("themeChanged", {
            detail: { theme: "colorful", base: nextBase },
          }),
        );

        return;
      }

      // Normal light/dark toggle
      const current = getBase();
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);

      // Notify listeners
      document.dispatchEvent(
        new CustomEvent("themeChanged", { detail: { theme: next } }),
      );
    }

    // Initialize icon based on the effective theme
    const effectiveTheme = isColorfulConfig
      ? localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      : getBase();

    updateThemeIcon(effectiveTheme);
    themeToggle.addEventListener("click", toggleTheme);

    // Debug
    console.log("Theme toggle initialized:", {
      isColorfulConfig,
      effectiveTheme,
      dataTheme: document.documentElement.getAttribute("data-theme"),
    });
  }

  // Mobile Navigation
  function initMobileNav() {
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const body = document.body;
    if (!mobileToggle || !mobileNav) return;

    function toggleMobileNav() {
      const isOpen = mobileNav.classList.contains("active");
      if (isOpen) {
        mobileNav.classList.remove("active");
        body.classList.remove("mobile-nav-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.classList.add("active");
        body.classList.add("mobile-nav-open");
        mobileToggle.setAttribute("aria-expanded", "true");
      }
    }

    mobileToggle.addEventListener("click", toggleMobileNav);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("active"))
        toggleMobileNav();
    });

    document.addEventListener("click", function (e) {
      if (
        mobileNav.classList.contains("active") &&
        !mobileNav.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        toggleMobileNav();
      }
    });
  }

  // Search Toggle
  function initSearch() {
    const searchToggle = document.getElementById("search-toggle");
    const searchOverlay = document.getElementById("search-overlay");
    const searchInput = document.getElementById("search-input");
    const searchClose = document.getElementById("search-close");

    if (!searchToggle || !searchOverlay) {
      console.error("Search elements not found:", {
        searchToggle: !!searchToggle,
        searchOverlay: !!searchOverlay,
      });
      return;
    }

    function openSearch() {
      console.log("Opening search overlay");
      searchOverlay.classList.add("active");
      document.body.classList.add("search-open");
      setTimeout(() => searchInput && searchInput.focus(), 100);
    }

    function closeSearch() {
      console.log("Closing search overlay");
      searchOverlay.classList.remove("active");
      document.body.classList.remove("search-open");
      if (searchInput) searchInput.value = "";
      const results = document.getElementById("search-results");
      if (results) {
        results.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-search"></i>
          <p>Start typing to search...</p>
        </div>
      `;
      }
    }

    // Add event listeners
    console.log("Adding search event listeners");
    searchToggle.addEventListener("click", openSearch);
    if (searchClose) searchClose.addEventListener("click", closeSearch);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && searchOverlay.classList.contains("active"))
        closeSearch();
    });
  }

  // Make sure to call this function on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initMobileNav();
    initSearch();
    initReadingProgress();
  });

  // Copy to clipboard
  window.copyToClipboard = function (text) {
    navigator.clipboard.writeText(text).then(
      function () {
        showCopyNotification("Link copied to clipboard!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      },
    );
  };

  function showCopyNotification(message) {
    const notification = document.createElement("div");
    notification.className = "copy-notification";
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add("show"), 100);
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  }

  // Reading Progress Indicator
  function initReadingProgress() {
    const progressBar = document.getElementById("reading-progress");
    if (!progressBar) return;
    function updateReadingProgress() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const readableHeight = scrollHeight - clientHeight;
      const progress = (scrollTop / readableHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
    window.addEventListener("scroll", updateReadingProgress);
    updateReadingProgress();
  }
})();
