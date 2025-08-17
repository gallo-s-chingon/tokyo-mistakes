// saved as search-init.js in tokyo-mistakes/assets/js
(function () {
  if (!document.getElementById("search-overlay")) return;

  var overlay = document.getElementById("search-overlay");
  var input = overlay.querySelector('input[type="search"]');
  var results = overlay.querySelector(".search__results");
  var openBtn =
    document.querySelector(".nav__search") ||
    document.getElementById("search-toggle");

  var idx,
    store = [],
    ready = false;

  function open() {
    overlay.hidden = false;
    overlay.setAttribute("aria-hidden", "false");
    input.value = "";
    results.innerHTML = "";
    input.focus();
    document.dispatchEvent(new Event("search:open"));
  }
  function close() {
    overlay.hidden = true;
    overlay.setAttribute("aria-hidden", "true");
    document.dispatchEvent(new Event("search:close"));
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      open();
    }
    if (e.key === "Escape") close();
  });
  if (openBtn) {
    openBtn.addEventListener("click", open);
  }
  overlay.querySelector(".search__close").addEventListener("click", close);

  fetch("/index.json")
    .then((r) => r.json())
    .then(function (data) {
      store = data;
      idx = lunr(function () {
        this.ref("permalink");
        this.field("title");
        this.field("description");
        this.field("summary");
        this.field("tags");
        this.field("categories");
        this.field("content");
        this.field("headings");
        data.forEach((d) => this.add(d));
      });
      ready = true;
    });

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (!ready || q.length < 2) {
      results.innerHTML = "";
      return;
    }
    var hits = idx.search(q).slice(0, 12);
    var html = hits
      .map((h) => {
        var doc = store.find((s) => s.permalink === h.ref) || {};
        return (
          '<a class="search__item" href="' +
          doc.permalink +
          '"><div class="search__title">' +
          (doc.title || "") +
          '</div><div class="search__desc">' +
          (doc.description || doc.summary || "") +
          "</div></a>"
        );
      })
      .join("");
    results.innerHTML = html || '<div class="search__empty">No results</div>';
  });
})();
