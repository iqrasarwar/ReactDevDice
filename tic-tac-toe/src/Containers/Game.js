import Board from "../Components/Board";
import React, { useState } from "react";
import { calculateWinner } from "../Helpers/CalculateWinner";
import Score from "../Components/Score";

//tic tac toe game component
export default function Game() {
  const [board, setBord] = useState(Array(9).fill(null));
  const [Next, setNext] = useState(true);
  const Winner = calculateWinner(board);
  const OnClick = (i) => {
    const boardCoy = [...board];
    if (Winner || boardCoy[i]) {
      return;
    }
    boardCoy[i] = Next ? "X" : "O";
    setBord(boardCoy);
    setNext(!Next);
  };

  return (
    <>
      <Board sqaures={board} onClick={OnClick} />
      <Score winner={Winner} />
    </>
  );
}
