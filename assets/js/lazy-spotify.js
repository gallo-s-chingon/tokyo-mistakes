(function(){
  function buildSrc(id, autoplay){
    var ap = autoplay ? '1' : '0';
    return 'https://open.spotify.com/embed/episode/' + encodeURIComponent(id) + '?utm_source=generator&autoplay=' + ap;
  }
  function activate(wrapper, autoplay){
    var id = wrapper.getAttribute('data-spotify-id');
    if(!id) return;
    var slot = wrapper.querySelector('.spotify-slot');
    if(!slot) return;
    var iframe = document.createElement('iframe');
    iframe.setAttribute('loading','lazy');
    iframe.setAttribute('allow','autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    iframe.style.width = '100%'; iframe.style.height = '152px'; iframe.style.border = '0';
    iframe.src = buildSrc(id, false); // default: no autoplay even on single; can be toggled later
    slot.innerHTML = ''; slot.appendChild(iframe);
    slot.removeAttribute('aria-hidden');
  }
  function bind(scope){
    var wrappers = (scope.querySelectorAll ? scope.querySelectorAll('.spotify-inline, .spotify-single') : []);
    wrappers.forEach(function(w){
      var btn = w.querySelector('.spotify-activate');
      if(!btn) return;
      btn.addEventListener('click', function(){
        activate(w, false);
      }, { once: true });
    });
  }
  document.addEventListener('DOMContentLoaded', function(){ bind(document); });
})();
