import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Draw from "./components/Draw";
import Restart from "./components/Restart";
import Win from "./components/Win";

function App() {
  const [plays, setPlays] = useState(Array(9).fill(null));
  const [xOrY, setXOrY] = useState(true);
  const [running, setRunning] = useState("running");

  useEffect(() => {
    if (
      (plays[0] === "X" && plays[1] === "X" && plays[2] === "X") ||
      (plays[3] === "X" && plays[4] === "X" && plays[5] === "X") ||
      (plays[6] === "X" && plays[7] === "X" && plays[8] === "X") ||
      (plays[0] === "X" && plays[3] === "X" && plays[6] === "X") ||
      (plays[1] === "X" && plays[4] === "X" && plays[7] === "X") ||
      (plays[2] === "X" && plays[5] === "X" && plays[8] === "X") ||
      (plays[0] === "X" && plays[4] === "X" && plays[8] === "X") ||
      (plays[2] === "X" && plays[4] === "X" && plays[6] === "X") ||
      (plays[0] === "O" && plays[1] === "O" && plays[2] === "O") ||
      (plays[3] === "O" && plays[4] === "O" && plays[5] === "O") ||
      (plays[6] === "O" && plays[7] === "O" && plays[8] === "O") ||
      (plays[0] === "O" && plays[3] === "O" && plays[6] === "O") ||
      (plays[1] === "O" && plays[4] === "O" && plays[7] === "O") ||
      (plays[2] === "O" && plays[5] === "O" && plays[8] === "O") ||
      (plays[0] === "O" && plays[4] === "O" && plays[8] === "O") ||
      (plays[2] === "O" && plays[4] === "O" && plays[6] === "O")
    ) {
      setRunning("win");
    } else if (
      plays[0] &&
      plays[1] &&
      plays[2] &&
      plays[3] &&
      plays[4] &&
      plays[5] &&
      plays[6] &&
      plays[7] &&
      plays[8]
    ) {
      setRunning("draw");
    }
  }, [plays]);

  const restart = () => {
    setPlays(Array(9).fill(null));
    setXOrY(true);
    setRunning("running");
  };

  return (
    <div className="game">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        <div className="board-rows">
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            S
            setXOrY={setXOrY}
            index={0}
            running={running}
          />
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={1}
            running={running}
          />
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={2}
            running={running}
          />
        </div>
        <div className="board-rows">
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={3}
            running={running}
          />
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={4}
            running={running}
          />
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={5}
            running={running}
          />
        </div>
        <div className="board-rows">
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={6}
            running={running}
          />
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={7}
            running={running}
          />
          <Cell
            plays={plays}
            setPlays={setPlays}
            xOrY={xOrY}
            setXOrY={setXOrY}
            index={8}
            running={running}
          />
        </div>
      </div>
      {running === "win" && <Win xOry={xOrY} />}
      {running === "draw" && <Draw />}
      {running !== "running" && <Restart restart={restart} />}
    </div>
  );
}

export default App;
