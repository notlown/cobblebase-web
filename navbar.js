/* Cobblebase Global Navbar - injected into all pages */
(function () {
  var iconBase = '';
  var homeBase = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].getAttribute('src') || '';
    if (src.indexOf('navbar.js') !== -1) {
      var idx = src.lastIndexOf('navbar.js');
      iconBase = src.substring(0, idx);
      homeBase = iconBase || './';
      break;
    }
  }

  // Determine active page
  var path = window.location.pathname;
  var active = 'home';
  if (path.indexOf('/docs/') !== -1) active = 'docs';
  else if (path.indexOf('/database/') !== -1) active = 'database';
  else if (path.indexOf('/generator/') !== -1) active = 'generator';

  function a(cls) { return active === cls ? ' active' : ''; }

  var nav = document.createElement('nav');
  nav.className = 'cb-navbar';
  nav.setAttribute('aria-label', 'Main navigation');
  nav.innerHTML =
    '<a class="cb-navbar-brand" href="' + homeBase + 'index.html">' +
    '<img src="' + iconBase + 'cobblebase_icon.png" alt="Cobblebase icon" width="28" height="28">' +
    '<span>Cobblebase</span></a>' +
    '<button class="cb-navbar-hamburger" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>' +
    '<div class="cb-navbar-links">' +
    '<a href="' + homeBase + 'index.html"' + a('home') + '>Home</a>' +
    '<a href="' + homeBase + 'docs/index.html"' + a('docs') + '>Docs</a>' +
    '<a href="' + homeBase + 'database/index.html"' + a('database') + '>Database</a>' +
    '<a href="' + homeBase + 'generator/index.html"' + a('generator') + '>Generator</a>' +
    '<a href="https://github.com/notlown/cobblebase" class="cb-external" target="_blank" rel="noopener">GitHub</a>' +
    '<a href="https://discord.gg/6As3sVZgVT" class="cb-external" target="_blank" rel="noopener">Discord</a>' +
    '</div>';

  document.body.insertBefore(nav, document.body.firstChild);

  // Hamburger toggle
  var btn = nav.querySelector('.cb-navbar-hamburger');
  var links = nav.querySelector('.cb-navbar-links');
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
