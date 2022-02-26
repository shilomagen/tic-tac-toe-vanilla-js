window.View = class View {
  constructor(controller) {
    this.controller = controller;
  }

  render(model) {
    document.querySelector('#app').innerHTML = `
    <section>
      ${this.#getCurrentPlayer(model.currentPlayer)}
      ${this.#getTable(model.currentGame)}
    </section>`;

    this.#addEventListeners();
  }

  #getCurrentPlayer(currentPlayer) {
    return `
      <h2>Current Player: ${currentPlayer}</h2>
    `;
  }

  #getTable(game) {
    return `
    <section>
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

