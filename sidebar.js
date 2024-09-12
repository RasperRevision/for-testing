const html = `<header class="d-flex justify-content-between main_header align-items-center py-1">
  <div class="p-0 ms-5">
    <a href="/" aria-label="Home" class="d-inline"><img height="70" src="/assets/logo/regular_logo_dark_no_text.svg" aria-label="Rasper Revision Logo"></a>
    <ul class="nav h-100 d-none d-md-inline-flex align-items-center">
      <li class="nav-item fs-5"><a style="display: inline !important" href="/create"
          class="nav-link link-light header-link">Create</a>
      </li>
      <li class="nav-item fs-5"><a style="display: inline !important" href="/contact" class="nav-link link-light header-link">Contact
          us</a>
      </li>
      <li class="nav-item fs-5"><a style="display: inline !important" href="/about" class="nav-link link-light header-link">About</a>
      </li>
      <li class="nav-item fs-5"><a style="display: inline !important" href="/privacy-policy"
          class="nav-link link-light header-link">Privacy Policy</a></li>
    </ul>
  </div>
  <ul class="nav d-flex align-items-center h-100">
    <li class="nav-item ms-3">
      <a class="text-white" href="/search/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </a>
    </li>
    <li class="nav-item ms-3">
      <button class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
        </svg>
      </button>
    </li>
    <li>
    |
    </li>
    <li class="nav-item ms-3">
      <a class="text-white" href="https://github.com/RasperRevision/RasperRevision.github.io" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
        </svg>
      </a>
    </li>
    <li class="nav-item ms-3">
      <a class="text-white" href="https://www.youtube.com/@RasperRevision" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
        </svg>
      </a>
    </li>
  </ul>
</header>

<div class="d-flex sidebar-wrapper" id="wrapper">
  <div id="sidebar" style="z-index: 1000;">
    <a class="d-flex justify-content-center mb-5" href="/">
      <img class="side-logo" src="/assets/regular_logo_notext.png">
    </a>
    <ul class="list-group list-group-flush">
      <li><a href="/create" class="list-group-item">Create</a></li>
      <li><a href="/contact/" class="list-group-item">Contact us</a></li>
      <li><a href="/about" class="list-group-item">About</a></li>
      <li><a href="/privacy-policy/" class="list-group-item">Privacy Policy</a></li>
    </ul>
  </div>
</div>
`;

const sidebar_header_wrapper = document.createElement('div');
sidebar_header_wrapper.innerHTML = html;
document.querySelector('.main_wrapper').insertBefore(sidebar_header_wrapper, document.querySelector('.main_wrapper').children[0]);

var icon = document.createElement('div');
var icon1 = document.createElement('div');
var icon2 = document.createElement('div');
var icon3 = document.createElement('div');

icon.classList.add('hamburger-icon');
icon1.classList.add('icon-1');
icon2.classList.add('icon-2');
icon3.classList.add('icon-3');

icon.appendChild(icon1);
icon.appendChild(icon2);
icon.appendChild(icon3);
document.body.appendChild(icon);

icon.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
});
