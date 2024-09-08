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
  <ul>
    <a class="text-white" href="https://github.com/RasperRevision/RasperRevision.github.io" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
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
