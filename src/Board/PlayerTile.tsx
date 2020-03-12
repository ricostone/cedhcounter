import React from "react";
import { IPlayer } from "../Contracts";

interface Props {
  player: IPlayer;
  playerIndex:number;
  setAlive(playerIndex:number, heIs:boolean):void;
  updateLife(playerIndex:number, total:number):void;
}

const PlayerTile = ({ player, playerIndex, setAlive, updateLife }: Props) => {
  
  return (
    <div className={"col-4 border border-primary"}>
      {!player.alive || player.life <= 0 ? (
        <>
          <span role="img" aria-label={"dead"}>
            ☠️
          </span>
          <button className={"btn btn-primary"} onClick={()=>setAlive(playerIndex, true)}>
            <span role="img" aria-label={"death"}>
              👼🏻
            </span>
          </button>
        </>
      ) : (
        <>
          <h2>
            {player.name}{" "}
            <span className={`d-inline-block ${player.color}`}>
              {player.color}
            </span>
          </h2>
          <p>Life : {player.life}</p>
          {player.timer && <p>Timer : {player.timer}</p>}
          <p>Poison : {player.poison}</p>
          <p>Commander: -</p>
          <p>Alive : {player.alive ? "😃" : "💀"}</p>
          <button className={"btn btn-primary"} onClick={() => updateLife(playerIndex, -1)}>
            -1
          </button>
          <button className={"btn btn-primary"} onClick={() => updateLife(playerIndex, 1)}>
            +1
          </button>
          <button className={"btn btn-primary"} onClick={() => updateLife(playerIndex, -5)}>
            -5
          </button>
          <button className={"btn btn-primary"} onClick={() => updateLife(playerIndex, 5)}>
            +5
          </button>
          <button className={"btn btn-primary"} onClick={()=>setAlive(playerIndex, false)}>
            <span role="img" aria-label={"toDeath"}>
              ☠️
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default PlayerTile;
