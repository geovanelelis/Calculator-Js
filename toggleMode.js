document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll('#switchLight, #switchDark')
    .forEach(function (element) {
      element.addEventListener('click', toggleMode);
    });
});

export default function toggleMode() {
  const html = document.documentElement;
  const switchDark = document.getElementById('switchDark');
  const switchLight = document.getElementById('switchLight');

  if (html.classList.toggle('dark')) {
    switchDark.style.color = '#fff';
    switchLight.style.color = '#929292';
  } else {
    switchDark.style.color = '#929292';
    switchLight.style.color = '#2f343f';
  }
}
