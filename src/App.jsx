import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Draw from "./components/Draw";
import Restart from "./components/Restart";
import Win from "./components/Win";

function App() {
  const [plays, setPlays] = useState(Array(9).fill(null));
  const [xOrO, setXOrO] = useState(true);
  const [running, setRunning] = useState("running");

  useEffect(() => {
    if (
      (plays[0] === plays[1] && plays[1] === plays[2] && plays[2] !== null) ||
      (plays[3] === plays[4] && plays[4] === plays[5] && plays[5] !== null) ||
      (plays[6] === plays[7] && plays[7] === plays[8] && plays[8] !== null) ||
      (plays[0] === plays[3] && plays[3] === plays[6] && plays[6] !== null) ||
      (plays[1] === plays[4] && plays[4] === plays[7] && plays[7] !== null) ||
      (plays[2] === plays[5] && plays[5] === plays[8] && plays[8] !== null) ||
      (plays[0] === plays[4] && plays[4] === plays[8] && plays[8] !== null) ||
      (plays[2] === plays[4] && plays[4] === plays[6] && plays[6] !== null)
    ) {
      setRunning("win");
    } else if (plays.filter((play) => play).length === 9) {
      setRunning("draw");
    }
  }, [plays]);

  const restart = () => {
    setPlays(Array(9).fill(null));
    setXOrO(true);
    setRunning("running");
  };

  return (
    <div className="game">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        {plays.map((play, index) => (
          <Cell
            key={index}
            plays={plays}
            setPlays={setPlays}
            xOrO={xOrO}
            setXOrO={setXOrO}
            index={index}
            running={running}
            play={play}
          />
        ))}
      </div>
      {running === "win" && <Win xOry={xOrO} />}
      {running === "draw" && <Draw />}
      {running !== "running" && <Restart restart={restart} />}
    </div>
  );
}

export default App;
