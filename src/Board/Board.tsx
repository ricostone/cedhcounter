import React from "react";
import { LIFE_TOTAL, TIMER, STEP, IPlayer } from "../Contracts";
import PlayerTile from "./PlayerTile";

interface Props {
  players: Array<IPlayer>;
  setStep: (step: STEP) => void;
}

const Board = ({ players, setStep }: Props) => {
  const reset = () => {
    alert("reset!");
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => setStep(STEP.HOME)}
          >
            Home
          </button>
          <div className="row">
            {players.map((player, i) => (
              <PlayerTile key={i} player={player} />
            ))}
          </div>
          <button className={"btn btn-primary"} onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;
