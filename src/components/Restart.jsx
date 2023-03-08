import React from "react";
import "./Restart.css";

function Restart({ restart }) {
  return (
    <div className="restart" onClick={restart}>
      Restart Game
    </div>
  );
}

export default Restart;
