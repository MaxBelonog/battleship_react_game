import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: []
    }
    this.setUpBoard()
  }

  componentWillMount(){
    for(let i = 0; i < 5; i++){
      this.placeShip()
    }
  }

  setUpBoard() {
    for (let i = 0; i < 10; i++) {
      this.state.board.push([])
    }
  }

  placeShip() {
    let ship = 1;
    let i = 0;
    // get the array out of the state
    let newBoard = this.state.board

    while(i < 1){
      let randPosX = Math.floor(Math.random() * 10)
      let randPosY = Math.floor(Math.random() * 10)
      // update it
      if(!newBoard[randPosX][randPosY] || newBoard[randPosX][randPosY].length === 0){ newBoard[randPosX][randPosY] = ship
        i++
      }
    }
    // put it back with set state
    this.setState({
      board: newBoard
    })
  }

  clickHandler(x, y) {
    let newBoard = this.state.board
    newBoard[y][x] = 6;
    this.setState({
      board: newBoard
    })
  }

  renderRow(y) {
    const row = [];
    for (let x = 0; x < 10; x++) {
      let theXY = x + "_" + y
      row.push(
        <td id={theXY}
            key={theXY}
            onClick={this.clickHandler.bind(this,x, y)}
        >
          {this.state.board[y][x]}
        </td>
      );
    }
    return row;
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
      <table>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }
}

export default Board;
