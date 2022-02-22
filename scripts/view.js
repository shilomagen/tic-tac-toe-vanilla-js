window.View = class View {
  constructor(controller) {
    this.controller = controller;
  }

  render(model) {
    document.querySelector('#app').innerHTML = `
    <section>
      ${this.#getBoard(model)}
    </section>`;

    this.#addEventListeners();
  }

  #getBoard(model) {
    const isDraw = model.gameEnded && model.winner === null;
    if (isDraw) {
      return this.#getDraw();
    } else {
      if (model.winner) {
        return this.#getWinner(model.winner);
      } else {
        return this.#getTable(model.currentGame, model.currentPlayer);
      }
    }
  }

  #getDraw() {
    return `
    <h2>Draw</h2>
    `;
  }

  #getWinner(winner) {
    return `
      <h2>And the winner is ${winner}</h2>
    `;
  }

  #getCurrentPlayer(currentPlayer) {
    return `
      <h2>Current Player: ${currentPlayer}</h2>
    `;
  }

  #getTable(game, currentPlayer) {
    return `
    <section>
    ${this.#getCurrentPlayer(currentPlayer)}
      <table>
        <tbody>
          ${game.map((row, index) => this.#getRow(row, index)).join('')}    
        </tbody>
      </table>
    </section>
    `;

  }

  #getRow(row, rowIndex) {
    return `
       <tr id="${rowIndex}">
          ${row.map((cellValue, index) => this.#getCell(cellValue, index, rowIndex)).join('')}
       </tr>`;

  }

  #addEventListeners() {
    document.querySelectorAll('.cell')
      .forEach(cell => cell.addEventListener('click', event => {
        const [row, col] = event.target.dataset.cellPosition.split('-');
        this.controller.onCellClicked(row, col);
      }));
  }


  #getCell(cellValue, cellIndex, rowIndex) {
    return `
      <td class="cell" data-cell-position="${rowIndex}-${cellIndex}">${cellValue !== null ? cellValue : ''}</td>
      `;
  }

};

