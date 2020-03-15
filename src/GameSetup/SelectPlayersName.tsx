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
import { cloneDeep } from "lodash";
import SetupLayout from "../Components/SetupLayout";
import SetupBackButton from "../Components/SetupBackButton";

interface Props extends ISetupStep {
  playersNumber: PLAYERS;
  timerTotal: TIMER;
  lifeTotal: LIFE_TOTAL;
  setInitPlayers: (players: Array<IPlayer>) => void;
}

const SelectPlayersName = ({
  toStep,
  playersNumber,
  lifeTotal,
  timerTotal,
  setInitPlayers
}: Props) => {
  const [setupPlayers, setSetupPlayers] = useState<Array<IPlayer>>(
    cloneDeep(defaultPlayers.slice(0, playersNumber))
  );

  const setGamePlayers = () => {
    setupPlayers.map(player => {
      player.life = lifeTotal;
      if (timerTotal !== TIMER.none) {
        player.timer = Math.round((timerTotal as number) / playersNumber);
      }
      return player;
    });
    setInitPlayers(setupPlayers);
    toStep(STEP.SELECT_PLAYERS_ORDER, DIRECTION.FORTH);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setupPlayers[index].name = event.target.value;
    setSetupPlayers([...setupPlayers]);
  };

  const SelectPlayersNamesComponent = (
    <>
      <SetupBackButton
        onBack={() => toStep(STEP.SELECT_BOARD, DIRECTION.BACK)}
      />
      <h1>Set players name</h1>
      <p>Players number : {playersNumber}</p>
      {setupPlayers.map((player, i) => (
        <input
          key={i}
          type="text"
          value={player.name}
          onChange={e => handleChange(e, i)}
        />
      ))}
      <button className={"btn btn-primary"} onClick={() => setGamePlayers()}>
        Next
      </button>
    </>
  );

  return <SetupLayout setupComponent={SelectPlayersNamesComponent} />;
};

export default SelectPlayersName;
