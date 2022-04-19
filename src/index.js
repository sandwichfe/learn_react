import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        value:null
      }
  }


    render() {
      return (
        <button className="square" 
        onClick={()=>{this.setState({value:'X'})}}>
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          squares: Array(9).fill(null)
        };
    }


    renderSquare(i) {
      /**
       * 为了提高可读性，我们把返回的 React 元素拆分成了多行，
       * 同时在最外层加了小括号，这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构了。
       */
      return  (<Square value = {this.state.squares[i]} 
      onClick= { ()=>this.handleClick(i)}/>
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  