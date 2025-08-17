// Immediately invoked function to ensure a clean, private scope.
(function () {
  "use strict";

  // =========================================================================
  // 1. HEADER HIDE ON SCROLL
  // =========================================================================
  const header = document.querySelector(".header");
  if (header) {
    let lastY = window.scrollY || 0;
    let headerDisabled = false;

    const setHeaderDisabled = (state) => {
      headerDisabled = !!state;
      if (!headerDisabled) {
        header.classList.remove("header--hide");
      }
    };

    const handleScroll = () => {
      if (headerDisabled) return;
      let y = window.scrollY || 0;
      if (y > lastY && y > 100) {
        header.classList.add("header--hide");
      } else {
        header.classList.remove("header--hide");
      }
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Link to search and mobile nav events
    document.addEventListener("search:open", () => setHeaderDisabled(true));
    document.addEventListener("search:close", () => setHeaderDisabled(false));
    document.addEventListener("mobile-nav:open", () => setHeaderDisabled(true));
    document.addEventListener("mobile-nav:close", () =>
      setHeaderDisabled(false),
    );
  }

  // =========================================================================
  // 2. THEME TOGGLE (LIGHT/DARK/AUTO)
  // =========================================================================
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const docElement = document.documentElement;
    const savedTheme = localStorage.getItem("theme") || "auto";
    docElement.setAttribute("data-theme", savedTheme);

    themeToggle.addEventListener("click", () => {
      const currentTheme = docElement.getAttribute("data-theme");
      const nextTheme =
        currentTheme === "auto"
          ? "light"
          : currentTheme === "light"
            ? "dark"
            : "auto";
      docElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }

  // =========================================================================
  // 3. MOBILE NAVIGATION TOGGLE
  // =========================================================================
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav"); // Get the nav element itself

  if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener("click", (e) => {
      // When the hamburger is clicked, toggle the 'active' class on the nav menu
      const isOpen = mobileNav.classList.toggle("active");
      document.body.classList.toggle("mobile-nav--is-open", isOpen); // Also toggle class on body

      // Dispatch event so other scripts can react
      const eventName = isOpen ? "mobile-nav:open" : "mobile-nav:close";
      document.dispatchEvent(new Event(eventName));
      e.stopPropagation(); // prevent event from bubbling up
    });
  }

  // =========================================================================
  // 4. SEARCH OVERLAY & LUNR INITIALIZATION
  // =========================================================================
  const searchOverlay = document.getElementById("search-overlay");
  if (searchOverlay) {
    const searchInput = searchOverlay.querySelector('input[type="search"]');
    const searchResults = searchOverlay.querySelector(".search__results");
    const searchOpenBtn = document.querySelector(".nav__search");
    const searchCloseBtn = searchOverlay.querySelector(".search__close");

    let lunrIdx,
      store = [],
      ready = false;

    const openSearch = () => {
      searchOverlay.hidden = false;
      searchOverlay.setAttribute("aria-hidden", "false");
      searchInput.value = "";
      searchResults.innerHTML = "";
      searchInput.focus();
      document.dispatchEvent(new Event("search:open"));
    };

    const closeSearch = () => {
      searchOverlay.hidden = true;
      searchOverlay.setAttribute("aria-hidden", "true");
      document.dispatchEvent(new Event("search:close"));
    };
    // --- Event Listeners for Search ---
    document.addEventListener("keydown", (e) => {
      // Close with Escape
      if (e.key === "Escape") {
        closeSearch();
      }
      // Open with forward slash
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        openSearch();
      }

      // --- Keybind Navigation for Search Results ---
      const items = Array.from(searchResults.children);
      const active = searchResults.querySelector(".active");
      if (items.length === 0) return;

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        let next = active
          ? e.key === "ArrowDown"
            ? items[items.indexOf(active) + 1]
            : items[items.indexOf(active) - 1]
          : items[0];
        if (next) {
          if (active) active.classList.remove("active");
          next.classList.add("active");
          next.scrollIntoView({ block: "nearest" });
        }
      }

      if (e.key === "Enter" && active) {
        e.preventDefault();
        active.click();
      }
    });

    if (searchOpenBtn) searchOpenBtn.addEventListener("click", openSearch);
    if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);

    fetch("/index.json")
      .then((r) => r.json())
      .then((data) => {
        store = data;
        lunrIdx = lunr(function () {
          this.ref("permalink");
          this.field("title");
          this.field("description");
          this.field("content");
          data.forEach((d) => this.add(d));
        });
        ready = true;
      });

    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim();
      if (!ready || q.length < 2) {
        searchResults.innerHTML = "";
        return;
      }
      const hits = lunrIdx.search(q).slice(0, 12);
      const html = hits
        .map((h) => {
          const doc = store.find((s) => s.permalink === h.ref) || {};
          return `<a class="search__item" href="${doc.permalink}"><div class="search__title">${doc.title || ""}</div><div class="search__desc">${doc.description || doc.summary || ""}</div></a>`;
        })
        .join("");
      searchResults.innerHTML =
        html || '<div class="search__empty">No results</div>';
    });
  }

  // =========================================================================
  // 5. FLOATING ACTION BUTTONS (Back to Top)
  // =========================================================================
  const topBtn = document.getElementById("fabTop");
  if (topBtn) {
    const scrollThreshold = 600;
    window.addEventListener(
      "scroll",
      () => {
        topBtn.classList.toggle("fab--show", window.scrollY > scrollThreshold);
      },
      { passive: true },
    );

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
