import React from "react";
import { STEP, IPlayer, DIRECTION, ISetupStep } from "../Contracts";
import { shuffle } from "../Utils";

interface Props extends ISetupStep {
  players: Array<IPlayer>;
  setPlayers: (players: Array<IPlayer>) => void;
}

const SelectPlayersOrder = ({ toStep, players, setPlayers }: Props) => {
  const setGamePlayersOrder = () => {
    setPlayers(shuffle(players));
    toStep(STEP.BOARD, DIRECTION.FORTH);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => toStep(STEP.SELECT_PLAYERS_NAME, DIRECTION.BACK)}
          >
            Back
          </button>
          <h1>Set players order</h1>
          <button className={"btn btn-primary"} onClick={setGamePlayersOrder}>
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlayersOrder;
