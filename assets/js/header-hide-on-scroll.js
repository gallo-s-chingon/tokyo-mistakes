// saved as header-hide-on-scroll.js in tokyo-mistakes/assets/js
(function () {
  var lastY = window.scrollY || 0;
  var header = document.querySelector(".header");
  if (!header) return;
  var disabled = false;

  function setDisabled(state) {
    disabled = !!state;
    if (!disabled) reveal();
  }
  function hide() {
    header.classList.add("header--hide");
  }
  function reveal() {
    header.classList.remove("header--hide");
  }

  window.addEventListener(
    "scroll",
    function () {
      if (disabled) return;
      var y = window.scrollY || 0;
      if (y > lastY && y > 100) hide();
      else reveal();
      lastY = y;
    },
    { passive: true },
  );

  // Disable when search overlay or mobile nav open
  document.addEventListener("search:open", function () {
    setDisabled(true);
  });
  document.addEventListener("search:close", function () {
    setDisabled(false);
  });
})();
