import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({ value, onClick}) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXnext, setIsXnext] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [clicks, setClicks] = useState(0)
  
  const handleClick = (i)=>{
    if (clicks === 9 ){
      setSquares(Array(9).fill(null))
      setIsXnext(true)
      setClicks(0)
      console.log('gameOver BABY!!!!: ')
    }
    console.log(isXnext)
    let nextSquares
    setClicks(clicks+ 1)
    setIsXnext(!isXnext)
    console.log('clicks: ', clicks,'isXnext', isXnext)
    if (clicks > 8 ){
      setGameOver(true)
      console.log('gameOver: ', gameOver)
    }else{
      nextSquares = [...squares]
      isXnext ? nextSquares[i] = 'x' : nextSquares[i] = 'o' 
      setSquares(nextSquares)
    }
  }

  const renderSquare =(i)=> {
    return <Square value={squares[i]}  onClick={()=>{handleClick(i)}} />;
  }

    const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
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
