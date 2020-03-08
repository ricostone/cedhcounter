import React, { useState } from "react";
import { IPlayer } from "../Contracts";

interface Props {
  player: IPlayer;
}

const PlayerTile = ({ player }: Props) => {
  const [cPlayer, setPlayer] = useState<IPlayer>(player);

  const lifeUpdate = (number: number) => {
    cPlayer.life = cPlayer.life + number;
    setPlayer({ ...cPlayer });
  };

  const setDead = () => {
    cPlayer.alive = false;
    setPlayer({ ...cPlayer });
  };

  return (
    <div className={"col-4 border border-primary"}>
      {!cPlayer.alive ? (
        "☠️"
      ) : (
        <>
          <h2>
            {cPlayer.name}{" "}
            <span className={`d-inline-block ${cPlayer.color}`}>
              {cPlayer.color}
            </span>
          </h2>
          <p>Life : {cPlayer.life}</p>
          {cPlayer.timer && <p>Timer : {cPlayer.timer}</p>}
          <p>Poison : {cPlayer.poison}</p>
          <p>Commander: -</p>
          <p>Alive : {cPlayer.alive ? "😃" : "💀"}</p>
          <button className={"btn btn-primary"} onClick={() => lifeUpdate(-1)}>
            -1
          </button>
          <button className={"btn btn-primary"} onClick={() => lifeUpdate(1)}>
            +1
          </button>
          <button className={"btn btn-primary"} onClick={() => lifeUpdate(-5)}>
            -5
          </button>
          <button className={"btn btn-primary"} onClick={() => lifeUpdate(5)}>
            +5
          </button>
          <button className={"btn btn-primary"} onClick={setDead}>
            ☠️
          </button>
        </>
      )}
    </div>
  );
};

export default PlayerTile;
