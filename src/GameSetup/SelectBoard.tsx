import React from "react";
import { STEP, ISetupStep, DIRECTION, BOARD_TYPE } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";

interface Props extends ISetupStep {
  setBoardType: (boardType: BOARD_TYPE) => void;
  playersNumber: number;
}

const SelectBoard = ({ toStep, playersNumber, setBoardType }: Props) => {
  const setBoardTypeOption = (boardType: BOARD_TYPE) => {
    setBoardType(boardType);
    toStep(STEP.SELECT_PLAYERS_NAME, DIRECTION.FORTH);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => toStep(STEP.SELECT_PLAYERS_NUMBER, DIRECTION.BACK)}
          >
            Back
          </button>
          <h1>Set board type</h1>
          <SelectOptions options={BOARD_TYPE} setOption={setBoardTypeOption} />
        </div>
      </div>
    </div>
  );
};

export default SelectBoard;
