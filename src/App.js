import React, { Component } from 'react';
import './App.css';
import Board from'./components/board.js';

class App extends Component {
  render() {
    return (
      <div>
      <div className="header">Welcome to Battleship!</div>
        < Board />
      </div>
    );
  }
}
export default App;
