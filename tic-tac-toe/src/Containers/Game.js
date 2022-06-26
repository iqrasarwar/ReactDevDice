import Board from "../Components/Board";
import React, { useState } from "react";
import { calculateWinner } from "../Helpers/CalculateWinner";

//tic tac toe game component
export default function Game() {
  const [board, setBord] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  // const [stepNumber, setStepNumber] = useState(0);
  // const [winner, setWinner] = useState(null);
  // const [isDraw, setIsDraw] = useState(false);
  //handle click on a square
  const handleClick = (i) => {
    const boardCoy = [...board];
    if (calculateWinner(board) || boardCoy[i]) {
      return;
    }
    boardCoy[i] = xIsNext ? "X" : "O";
    setBord(boardCoy);
    setXIsNext(!xIsNext);
  };

  // const handleClick = (i) => {
  //   const historyCopy = history.slice(0, stepNumber + 1);
  //   const current = historyCopy[historyCopy.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = xIsNext ? "X" : "O";
  //   setHistory(historyCopy.concat([{ squares: squares }]));
  //   setStepNumber(historyCopy.length);
  //   setXIsNext(!xIsNext);
  // };
  //handle click on the reset button
  // const handleReset = () => {
  //   setHistory([{ squares: Array(9).fill(null) }]);
  //   setStepNumber(0);
  //   setXIsNext(true);
  // setWinner(null);
  // setIsDraw(false);
  // };
  //handle click on the undo button
  // const handleUndo = () => {
  //   const historyCopy = history.slice(0, stepNumber + 1);
  //   if (historyCopy.length <= 1) {
  //     return;
  //   }
  //   setHistory(historyCopy.slice(0, -1));
  //   setStepNumber(historyCopy.length - 1);
  //   const current = historyCopy[historyCopy.length - 1];
  //   const squares = current.squares.slice();
  //   const winner = calculateWinner(squares);
  //   setWinner(winner);
  //   setIsDraw(winner === null);
  //   setXIsNext(historyCopy.length % 2 === 0);
  // };
  //return the game component
  return (
    <div className="game-board">
      <Board squares={board} onClick={handleClick} />
    </div>
  );
}
