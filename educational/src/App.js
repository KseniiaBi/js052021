import './App.css';
import React from 'react';

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      isXturn: true,
      isGameOver: false
    }
  }

  handleTurn(id){
    if(this.state.squares[id] === ''){
      let copy = this.state.squares.slice();
      let data = this.state.isXturn ? 'X' : 'O';
      copy[id] = data;

      let gameover = this.checkWin(copy);

      this.setState({
        squares: copy,
        isXturn: !this.state.isXturn,
        isGameOver: gameover
      });
    }
  }

  checkWin(arr){
    let isGameOver = false;
    let squares = arr;
    if(squares[0] === squares[1] && squares[1] === squares[2] ||
        squares[3] === squares[4] && squares[4] === squares[5] ||
        squares[6] === squares[7] && squares[7] === squares[8] ||
        squares[0] === squares[3] && squares[3] === squares[6] ||
        squares[1] === squares[4] && squares[4] === squares[7] ||
        squares[2] === squares[5] && squares[5] === squares[8] ||
        squares[0] === squares[4] && squares[4] === squares[8]
        ){
      isGameOver = true;
    }
    return isGameOver;
  }

  render(){
    return(
      <div className="game">
        <h1>Tic Tac Toe</h1>
        {
          this.state.isGameOver ? <h2>Winner is {this.state.isXturn ? 'O' : 'X'}</h2> : null
        }
        <div className="info">Current player: {this.state.isXturn ? 'X' : 'O'} </div>
        
        <div className="board">
          {
            this.state.squares.map((square,index) =>  <Square key={index} click={() => this.handleTurn(index)} data={square} />)
          }
        </div>

      </div>
      );
  }
};

const Square = (props) => <div onClick={props.click} className="square">{props.data}</div>

export default Game;

//Game
// Square