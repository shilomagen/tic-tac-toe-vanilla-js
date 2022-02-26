const WinningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

window.Controller = class Controller {
  constructor(model) {
    this.model = model;
  }

  onCellClicked(row, col) {
    this.model.cellMarked(row, col);
    this.model.switchPlayer();
  }

};

