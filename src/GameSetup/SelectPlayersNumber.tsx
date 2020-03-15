import React from "react";
import { STEP, PLAYERS, ISetupStep, DIRECTION } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";
import SetupLayout from "../Components/SetupLayout";
import SetupBackButton from "../Components/SetupBackButton";

interface Props extends ISetupStep {
  setPlayersNumber: (playersNumber: PLAYERS) => void;
}

const SelectPlayersNumber = ({ toStep, setPlayersNumber }: Props) => {
  const setPlayersNumberOption = (playersNumber: PLAYERS) => {
    setPlayersNumber(playersNumber);
    toStep(
      playersNumber === 4 ? STEP.SELECT_BOARD : STEP.SELECT_PLAYERS_NAME,
      DIRECTION.FORTH
    );
  };

  const SelectPlayersNumberComponent = (
    <>
      <SetupBackButton
        onBack={() => toStep(STEP.SELECT_TIMER, DIRECTION.BACK)}
      />
      <h1>Set players number</h1>
      <SelectOptions options={PLAYERS} setOption={setPlayersNumberOption} />
    </>
  );

  return <SetupLayout setupComponent={SelectPlayersNumberComponent} />;
};

export default SelectPlayersNumber;
