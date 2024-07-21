import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(initialBoard());
  const [turn, setTurn] = useState("X");
  const [win, setWin] = useState(getWinsArray());

  function initialBoard() {
    return new Array(size * size).fill(null);
  }

  function getWinsArray() {
    let a = [],
      temp = [],win=[];
    let i, j;
    for (i = 0; i < size * size; i++) {
      temp.push(i);
      if (temp.length == size) {
        a.push(temp);
        temp = [];
      }
    }

  for(i=0;i<size;i++){
    for(j=0;j<size;j++){
     temp.push(a[i][j]);
     if(temp.length==size){
      win.push(temp);temp=[];
     }
    }
  }
  temp=[];

  for(i=0;i<size;i++){
    for(j=0;j<size;j++){
    if(i>=j){
      
    }
    }
  }




  }

  const handleClick = (index) => {
    if (board[index] == null) {
      board[index] = turn;
      setTurn((prev) => {
        return prev == "X" ? "O" : "X";
      });
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">
        <div className="statusContent">
          <p>Player {turn} turn</p>
          <button>Reset game</button>
        </div>
      </div>

      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${size},1fr)`,
          width: `${size * 100}px`,
        }}
      >
        {board.map((item, index) => {
          return (
            <div
              className="cell"
              key={index}
              onClick={(e) => handleClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
