import { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(initialBoard());
  const [turn, setTurn] = useState("X");
  const [win, setWin] = useState(getWinsArray());
  const [winner, setWinner] = useState("");

  function initialBoard() {
    return new Array(size * size).fill(null);
  }

  function getWinsArray() {
    let win = [];
    let i, j;
    for (i = 0; i < size; i++) {
      let harr = [];
      let varr = [];
      for (j = 0; j < size; j++) {
        harr.push(i * size + j);
        varr.push(j * size + i);
      }
      win.push(harr);
      win.push(varr);
    }

    let d1 = [],
      d2 = [];

    for (i = 0; i < size; i++) {
      d1.push(i * size + i);
      d2.push(i * size + (size - i - 1));
    }
    win.push(d1, d2);

    return win;
  }

  function checkWinner() {
    let i, j;
    for (i = 0; i < win.length; i++) {
      let arr = win[i];
      let cx = 0,
        co = 0;
      for (j = 0; j < arr.length; j++) {
        if (board[arr[j]] == "X") cx++;
        if (board[arr[j]] == "O") co++;
      }
      if (cx == size) {
        setWinner("X");
        return;
      }
      if (co == size) {
        setWinner("O");
        return;
      }
    }
  }

  const handleClick = (index) => {
    if (winner) return;
    if (board[index] == null) {
      board[index] = turn;
      setTurn((prev) => {
        return prev == "X" ? "O" : "X";
      });
    }

    checkWinner();
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setWinner("");
    setTurn("X");
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">
        <div className="statusContent">
          {winner ? <p>Player {winner} wins</p> : <p>Player {turn} turn</p>}
          <button onClick={(e) => resetGame()}>Reset game</button>
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
