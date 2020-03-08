import React from "react";
import { STEP, TIMER, ISetupStep, DIRECTION } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";

interface Props extends ISetupStep {
  setTimer: (timerTotal: TIMER) => void;
}

const SelectTimer = ({ toStep, setTimer }: Props) => {
  const setTimerOption = (timer: TIMER) => {
    setTimer(timer);
    toStep(STEP.SELECT_PLAYERS_NUMBER, DIRECTION.FORTH);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => toStep(STEP.SELECT_LIFE, DIRECTION.BACK)}
          >
            Back
          </button>
          <h1>Set timer</h1>
          <SelectOptions options={TIMER} setOption={setTimerOption} />
        </div>
      </div>
    </div>
  );
};

export default SelectTimer;
