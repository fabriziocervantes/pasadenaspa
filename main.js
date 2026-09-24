(function () {
  var WA_NUMBER = '526141108639';
  var WA_DEFAULT = 'Hola, me gustaría agendar una cita en pasadena spa';

  // WhatsApp links with a pre-filled message
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    var text = a.getAttribute('data-wa-text') || WA_DEFAULT;
    a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
  });

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero halo gently follows the cursor, like a candle lighting what you look at
  var hero = document.querySelector('.hero');
  var halo = document.querySelector('[data-halo]');
  if (hero && halo && !reduced && window.matchMedia('(hover: hover)').matches) {
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      halo.style.transform = 'translate(-50%,-50%) translate(' + (x * 90) + 'px, ' + (y * 60) + 'px)';
    });
  }

  if (reduced || !('IntersectionObserver' in window)) return;

  // Elements fade in from dark; gold line flowers draw themselves on scroll
  document.documentElement.classList.add('motion');
  var reveals = document.querySelectorAll('[data-reveal]');
  var draws = document.querySelectorAll('[data-draw]');

  draws.forEach(function (svg) {
    svg.querySelectorAll('ellipse, circle, line').forEach(function (s) {
      var L = s.getTotalLength ? s.getTotalLength() : 200;
      s.style.strokeDasharray = L;
      s.style.strokeDashoffset = L;
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      if (el.hasAttribute('data-draw')) {
        el.querySelectorAll('ellipse, circle, line').forEach(function (s, i) {
          s.style.transitionDelay = (i * 0.12) + 's';
          s.style.strokeDashoffset = '0';
        });
      } else {
        el.classList.add('is-lit');
      }
      io.unobserve(el);
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { io.observe(el); });
  draws.forEach(function (el) { io.observe(el); });
})();
