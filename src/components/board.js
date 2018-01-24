import React, { Component } from 'react';

const EMPTY = 0;
const SHIP = null;
const SHIP_HIT = "HIT!";
const EMPTY_HIT = "MISS";

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      bgColor: 'lightblue',
      torpedoes: 25
    }
    this.setUpBoard()
  }

  componentWillMount(){
    for(let i = 0; i < 5; i++){
      this.placeShip()
    }
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



  placeShip() {
    let i = 0;
    let newBoard = this.state.board

    while(i < 1){
      let row = Math.floor(Math.random() * 10)
      let col = Math.floor(Math.random() * 10)
      if(!newBoard[row][col] || newBoard[row][col].length === 0) {
        newBoard[row][col] = SHIP
        i++
      }
    }
    this.setState({
      board: newBoard
    })
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
      alert("It's been HIT! Choose another location.")

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
        <div className="torpedo">Torpedoes: {this.state.torpedoes}</div>
      </div>
    )
  }
}

export default Board;
