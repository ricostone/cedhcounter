import React from "react";
import { STEP, PLAYERS, ISetupStep, DIRECTION } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";

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

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => toStep(STEP.SELECT_TIMER, DIRECTION.BACK)}
          >
            Back
          </button>
          <h1>Set players number</h1>
          <SelectOptions options={PLAYERS} setOption={setPlayersNumberOption} />
        </div>
      </div>
    </div>
  );
};

export default SelectPlayersNumber;
