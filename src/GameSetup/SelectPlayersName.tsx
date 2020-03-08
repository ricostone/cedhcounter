import React, { useState } from "react";
import {
  STEP,
  IPlayer,
  DIRECTION,
  ISetupStep,
  PLAYERS,
  TIMER,
  LIFE_TOTAL
} from "../Contracts";
import { defaultPlayers } from "../Data";

interface Props extends ISetupStep {
  playersNumber: PLAYERS;
  timerTotal: TIMER;
  lifeTotal: LIFE_TOTAL;
  setPlayers: (players: Array<IPlayer>) => void;
}

const SelectPlayersName = ({
  toStep,
  playersNumber,
  lifeTotal,
  timerTotal,
  setPlayers
}: Props) => {
  const [setupPlayers, setSetupPlayers] = useState<Array<IPlayer>>(
    defaultPlayers.slice(0, playersNumber)
  );

  const setGamePlayers = () => {
    setupPlayers.map(player => {
      player.life = lifeTotal;
      if (timerTotal !== TIMER.none) {
        player.timer = Math.round((timerTotal as number) / playersNumber);
      }
    });
    setPlayers(setupPlayers);
    toStep(STEP.SELECT_PLAYERS_ORDER, DIRECTION.FORTH);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => toStep(STEP.SELECT_BOARD, DIRECTION.BACK)}
          >
            Back
          </button>
          <h1>Set players name</h1>
          <p>Players number : {playersNumber}</p>
          <button
            className={"btn btn-primary"}
            onClick={() => setGamePlayers()}
          >
            Set players
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlayersName;
