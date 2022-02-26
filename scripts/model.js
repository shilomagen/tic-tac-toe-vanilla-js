window.Model = class Model {
  constructor() {
    this.state = {
      currentPlayer: 'X',
      currentGame: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      gameEnded: false,
      winner: null
    };
    this.observers = [];
  }

  subscribeToChanges(fn) {
    this.observers.push(fn);
  }

  setDraw() {
    this.state.gameEnded = true;
    this.notifyAll();
  }

  setWinner() {
    this.state.winner = this.state.currentPlayer;
    this.state.gameEnded = true;
    this.notifyAll();
  }

  cellMarked(row, col) {
    this.state.currentGame[row][col] = this.state.currentPlayer;
    this.notifyAll();
  }

  switchPlayer() {
    if (!this.state.gameEnded) {
      this.state.currentPlayer = this.state.currentPlayer === 'X' ? 'Y' : 'X';
    }
    this.notifyAll();
  }

  getCurrentGame() {
    return this.state.currentGame;
  }

  notifyAll() {
    this.observers.forEach(fn => fn(this.state));
  }
};


