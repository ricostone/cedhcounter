import React from "react";
import { STEP, IPlayer, DIRECTION, ISetupStep } from "../Contracts";
import { shuffle } from "../Utils";
import SetupLayout from "../Components/SetupLayout";
import SetupBackButton from "../Components/SetupBackButton";
import PlayerReorder from "../Components/PlayerReorder";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

interface Props extends ISetupStep {
  players: Array<IPlayer>;
  setPlayers: (players: Array<IPlayer>) => void;
}

const SelectPlayersOrder = ({ toStep, players, setPlayers }: Props) => {
  const setRandomPlayersOrder = () => {
    setPlayers(shuffle(players));
    startGame();
  };

  const startGame = () => {
    toStep(STEP.BOARD, DIRECTION.FORTH);
  };

  const SelectPlayersNumberComponent = (
    <>
      <SetupBackButton
        onBack={() => toStep(STEP.SELECT_PLAYERS_NAME, DIRECTION.BACK)}
      />
      <h1>Set players order</h1>
      <button className={"btn btn-primary"} onClick={setRandomPlayersOrder}>
        Random !
      </button>
      <DndProvider backend={Backend}>
        <PlayerReorder
          players={players}
          setPlayers={setPlayers}
          toStep={toStep}
        />
      </DndProvider>
      <button className={"btn btn-primary"} onClick={startGame}>
        Start the game !
      </button>
    </>
  );

  return <SetupLayout setupComponent={SelectPlayersNumberComponent} />;
};

export default SelectPlayersOrder;
