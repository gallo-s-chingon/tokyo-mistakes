(function(){
  var toc = document.getElementById('toc'); if(!toc) return;
  var links = toc.querySelectorAll('.toc__body a[href^="#"]'); if(!links.length) return;
  var heads = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  var h1s = heads.filter(h => /^H1$/.test(h.tagName));
  var io = new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      var current = e.target;
      toc.classList.add('toc--compact');
      toc.querySelectorAll('.is-current-h1').forEach(li=>li.classList.remove('is-current-h1'));
      var li = toc.querySelector('.toc__body a[href="#'+current.id+'"]'); if(!li) return;
      li = li.closest('li'); if(li) li.classList.add('is-current-h1');
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  h1s.forEach(h=>io.observe(h));
})();
