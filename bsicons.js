document.querySelectorAll('svg.bi').forEach(icn => {
  if (icn.classList.contains('bi-caret-right-fill')) {
    icn.innerHTML = '<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />'
  }
})