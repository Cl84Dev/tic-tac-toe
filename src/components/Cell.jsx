import React from "react";
import "./Cell.css";

function Cell({ plays, setPlays, xOrY, setXOrY, index, running }) {
  const play = (index) => {
    const newPlays = [...plays];
    if (plays[index]) {
      return;
    }

    if (running !== "running") {
      return;
    }

    if (xOrY) {
      newPlays[index] = "X";
    } else {
      newPlays[index] = "O";
    }

    setPlays(newPlays);
    setXOrY(!xOrY);
  };

  return (
    <div
      className="cell"
      onClick={() => play(index)}
      style={plays[index] === "X" ? { color: "blue" } : { color: "red" }}
    >
      {plays[index]}
    </div>
  );
}

export default Cell;
