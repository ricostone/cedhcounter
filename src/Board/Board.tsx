import React, { useState } from "react";
import { LIFE_TOTAL, TIMER, STEP, IPlayer } from "../Contracts";
import PlayerTile from "./PlayerTile";
import { cloneDeep } from "lodash";

interface Props {
  setStep: (step: STEP) => void;
  initPlayers: Array<IPlayer>;
}

const Board = ({ setStep, initPlayers }: Props) => {

  const defaultValues = cloneDeep(initPlayers);
  const [players, setPlayers] = useState<Array<IPlayer>>(defaultValues);

  const reset = () => {
    setPlayers(cloneDeep(defaultValues));
    alert(
      "Next First player : " +
        players[Math.floor(Math.random() * players.length)].name
    );
  };

  const updateLife = (playerIndex:number, number: number) => {
    players[playerIndex].life = players[playerIndex].life + number;
    setPlayers([...players]);
  };

  const setAlive = (playerIndex:number, heIs:boolean) => {
    players[playerIndex].alive = heIs;
    if(heIs && players[playerIndex].life <= 0){
      players[playerIndex].life = 1 ;
    } 
    setPlayers([...players]);
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
            { players.map((player, i) => (
              <PlayerTile key={i} player={player} playerIndex={i} updateLife={updateLife} setAlive={setAlive} />
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
