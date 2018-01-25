import React, { Component } from 'react';

const EMPTY = 0;
const SHIP = "SHIP";
const SHIP_HIT = "HIT!";
const EMPTY_HIT = "MISS";

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      bgColor: 'lightblue',
      torpedoes: 25,
      battleships: 5
    }
    this.setUpBoard()
  }

  componentWillMount() {
    this.placeShips()
  }

  setUpBoard() {
    let board = []

    for(let row = 0; row < 10; row++) {
      board.push([])
      for(let col = 0; col < 10; col++) {
        board[row][col] = EMPTY
      }
    }
    this.state.board = board
  }

  aircraftCarrierVertical() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 6)
    let col = Math.floor(Math.random() * 10)

    if (!newBoard[row][col] && !newBoard[row+1][col] &&
      !newBoard[row+2][col] && !newBoard[row+3][col] && !newBoard[row+4][col]) {
      newBoard[row][col] = SHIP
      newBoard[row+1][col] = SHIP
      newBoard[row+2][col] = SHIP
      newBoard[row+3][col] = SHIP
      newBoard[row+4][col] = SHIP
    } else {
      this.aircraftCarrierVertical()
    }
  }

  aircraftCarrierHorizontal() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 6)

    if (!newBoard[row][col] && !newBoard[row][col+1] &&
      !newBoard[row][col+2] && !newBoard[row][col+3] && !newBoard[row][col+4]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
      newBoard[row][col+2] = SHIP
      newBoard[row][col+3] = SHIP
      newBoard[row][col+4] = SHIP
    } else {
      this.aircraftCarrierHorizontal
    }
  }

  uShipVertical() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 7)

    if (!newBoard[row][col] && !newBoard[row][col+1] &&
      !newBoard[row][col+2] && !newBoard[row][col+3]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
      newBoard[row][col+2] = SHIP
      newBoard[row][col+3] = SHIP
    } else {
      this.uShipVertical()
    }
  }

  uShipHorizontal() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 6)
    let col = Math.floor(Math.random() * 10)

    if (!newBoard[row][col] && !newBoard[row][col+1] &&
      !newBoard[row][col+2] && !newBoard[row][col+3]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
      newBoard[row][col+2] = SHIP
      newBoard[row][col+3] = SHIP
    } else {
      this.uShipHorizontal()
    }
  }

  submarineVertical() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 8)

    if (!newBoard[row][col] && !newBoard[row][col+1] &&
      !newBoard[row][col+2]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
      newBoard[row][col+2] = SHIP
    } else {
      this.submarineVertical()
    }
  }

  submarineHorizontal() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 7)
    let col = Math.floor(Math.random() * 10)

    if (!newBoard[row][col] && !newBoard[row][col+1] &&
      !newBoard[row][col+2]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
      newBoard[row][col+2] = SHIP
    } else {
      this.submarineHorizontal()
    }
  }

  cruiserVertical() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 9)

    if (!newBoard[row][col] && !newBoard[row][col+1]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
    } else {
      this.cruiserVertical()
    }
  }

  cruiserHorizontal() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 9)
    let col = Math.floor(Math.random() * 10)

    if (!newBoard[row][col] && !newBoard[row][col+1]) {
      newBoard[row][col] = SHIP
      newBoard[row][col+1] = SHIP
    } else {
      this.cruiserHorizontal()
    }
  }

  patrolBoatVertical() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 10)

    if (!newBoard[row][col]) {
      newBoard[row][col] = SHIP
    } else {
      this.patrolBoatVertical()
    }
  }

  patrolBoatHorizontal() {
    let newBoard = this.state.board
    let row = Math.floor(Math.random() * 10)
    let col = Math.floor(Math.random() * 10)

    if (!newBoard[row][col]) {
      newBoard[row][col] = SHIP
    } else {
      this.patrolBoatHorizontal
    }
  }

  placeShips() {
    let newBoard = this.state.board
    let coinFlip = Math.floor(Math.random() * 2)
    if (coinFlip === 0) {
      this.aircraftCarrierVertical()
    } else {
      this.aircraftCarrierHorizontal()
    }
    if (coinFlip === 0) {
      this.uShipVertical()
    } else {
      this.uShipHorizontal()
    }
    if (coinFlip === 0) {
      this.submarineVertical()
    } else {
      this.submarineHorizontal()
    }
    if (coinFlip === 0) {
      this.cruiserVertical()
    } else {
      this.cruiserHorizontal()
    }
    if (coinFlip === 0) {
      this.patrolBoatVertical()
    } else {
      this.patrolBoatHorizontal()
    }
  }

  clickHandler(row, col, e) {
    const board = this.state.board

    if (this.state.torpedoes === 0) {
      alert('Game Over')

    } else if (board[col][row] === SHIP) {
      board[col][row] = SHIP_HIT
      e.target.style.backgroundColor = 'green'
      this.setState({
        board: board,
        torpedoes: this.state.torpedoes -= 1
      })

    } else if (board[col][row] === EMPTY) {
      board[col][row] = EMPTY_HIT
      e.target.style.backgroundColor = 'red'
      this.setState({
        board: board,
        torpedoes: this.state.torpedoes -= 1
      })

    } else if (board[col][row] === SHIP_HIT || board[col][row] === EMPTY_HIT) {
      alert("Already shot here! Choose another location.")
      console.log(board)
    } else {
      this.setState({
        board: board,
        torpedoes: this.state.torpedoes -= 1
      })
    }
  }

  renderRow(row) {
    const { board } = this.state

    const set = [];
    for (let col = 0; col < 10; col++) {
      let theXY = col + "_" + row
      set.push(
        <td id={theXY}
            key={theXY}
            onClick={this.clickHandler.bind(this, col, row)}
            style={{backgroundColor:this.state.bgColor}}

        >
          {board[row][col] !== 0 ? board[row][col] : ''}
        </td>
      );
    }
    return set;
  }

  renderRows() {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      rows.push(<tr key={i}>{this.renderRow(i)}</tr>);
    }
    return rows;
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            { this.renderRows() }
          </tbody>
        </table>
        <span className="torpedo">Torpedoes: {this.state.torpedoes}</span>
        <span className="ships">Battleships: {this.state.battleships}</span>
      </div>
    )
  }
}

export default Board;
