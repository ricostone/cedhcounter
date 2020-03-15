import React from "react";
import { STEP, ISetupStep, DIRECTION, BOARD_TYPE } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";
import SetupLayout from "../Components/SetupLayout";
import SetupBackButton from "../Components/SetupBackButton";

interface Props extends ISetupStep {
  setBoardType: (boardType: BOARD_TYPE) => void;
  playersNumber: number;
}

const SelectBoard = ({ toStep, playersNumber, setBoardType }: Props) => {
  const setBoardTypeOption = (boardType: BOARD_TYPE) => {
    setBoardType(boardType);
    toStep(STEP.SELECT_PLAYERS_NAME, DIRECTION.FORTH);
  };

  const SelectBoardComponent = (
    <>
      <SetupBackButton
        onBack={() => toStep(STEP.SELECT_PLAYERS_NUMBER, DIRECTION.BACK)}
      />
      <h1>Set board type</h1>
      <SelectOptions options={BOARD_TYPE} setOption={setBoardTypeOption} />
    </>
  );

  return <SetupLayout setupComponent={SelectBoardComponent} />;
};

export default SelectBoard;
