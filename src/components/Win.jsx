import React from "react";
import "./Win.css";

function Win({ xOry }) {
  return (
    <div>
      <h2 className="win">
        <span style={xOry ? { color: "red" } : { color: "blue" }}>
          {xOry ? "O" : "X"}
        </span>{" "}
        wins!!!
      </h2>
    </div>
  );
}

export default Win;
