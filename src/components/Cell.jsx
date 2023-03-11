import React from "react";
import "./Cell.css";

function Cell({ plays, setPlays, xOrO, setXOrO, index, running, play }) {
  const playGame = (index) => {
    const newPlays = [...plays];
    if (play) {
      return;
    }

    if (running !== "running") {
      return;
    }

    if (xOrO) {
      newPlays[index] = "X";
    } else {
      newPlays[index] = "O";
    }

    setPlays(newPlays);
    setXOrO(!xOrO);
  };

  return (
    <div
      className="cell"
      onClick={() => playGame(index)}
      style={play === "X" ? { color: "blue" } : { color: "red" }}
    >
      {play}
    </div>
  );
}

export default Cell;
