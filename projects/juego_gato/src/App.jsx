import "./App.css";
import { useState } from "react";

const TURNS = {
  //turnos
  X: "x", //true
  O: "o", //false
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const Winner_Combos = [
  //combinaciones ganadoras
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  //estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null));
  //estado del turno
  const [turn, setTurn] = useState(TURNS.X);
  //estado del ganador
  const [winner, setWinner] = useState(null); // null no hay ganador, false es que hay empate

  const checkWinner = (boardToCheck) => {
    //se revisan las combinaciones ganadoras
    //para ver si x o o ganaron
    for (const combo of Winner_Combos) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  //reiniciar el juego
  const resetGame = () => {
    //volver a poner los valores iniciales
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  //checar si el juego acaba
  const checkEndGame = (newBoard) => {
    //si no hay espacios vacios
    return newBoard.every((square) => square !== null);
  };


  const updateBoard = (index) => {
    //no se actualiza el tablero si ya hay algo
    if (board[index] || winner) return;
    // actualizar el tablero
    const newboard = [...board];
    newboard[index] = turn;
    setBoard(newboard);
    // actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //revisar si hay un ganador
    const newWinner = checkWinner(newboard);
    if (newWinner) {
      setWinner(newWinner);
    } //checar si el juego acaba
    else if(checkEndGame(newboard)){
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {
        winner !== null &&(
          <section className="winner">
            <div className="text">
              <h2>
                {winner === false
                  ? "Empate"
                  : "Ganó: "}
              </h2>

            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>
                Volver a jugar
              </button>
            </footer>
            </div>
          </section>
        )
      }
      
    </main>
  );
}

export default App;
