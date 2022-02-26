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
    if (this.model.getCurrentGame()[row][col] === null) {
      this.model.cellMarked(row, col);
      if (this.#checkForWin()) {
        this.model.setWinner();
      } else if (this.#checkForDraw()) {
        this.model.setDraw();
      } else {
        this.model.switchPlayer();
      }
    }


  }

  #checkForWin() {
    const currentGame = this.model.getCurrentGame().flat();
    return WinningLines.some(l => currentGame[l[0]] && currentGame[l[0]] === currentGame[l[1]] && currentGame[l[1]] === currentGame[l[2]]);
  }

  #checkForDraw() {
    const currentGame = this.model.getCurrentGame().flat();
    return currentGame.every(char => char !== null);
  }

};

