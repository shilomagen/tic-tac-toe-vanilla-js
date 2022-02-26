document.addEventListener('DOMContentLoaded', function () {
  onLoad()
});

function onLoad() {
  changeH1Color()
}

function changeH1Color() {
  document.querySelector('h1').style.color = 'red';
}
