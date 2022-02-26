document.addEventListener('DOMContentLoaded', function () {
  onLoad();
});

function onLoad() {
  document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', onCellClick);
  });
  changeH1Color();
}

function onCellClick(event) {
  event.target.classList.toggle('green-cell');
}

function changeH1Color() {
  document.querySelector('h1').style.color = 'red';
}
