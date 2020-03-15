import React from "react";
import { STEP, TIMER, ISetupStep, DIRECTION } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";
import SetupLayout from "../Components/SetupLayout";
import SetupBackButton from "../Components/SetupBackButton";

interface Props extends ISetupStep {
  setTimer: (timerTotal: TIMER) => void;
}

const SelectTimer = ({ toStep, setTimer }: Props) => {
  const setTimerOption = (timer: TIMER) => {
    setTimer(timer);
    toStep(STEP.SELECT_PLAYERS_NUMBER, DIRECTION.FORTH);
  };

  const SelectTimerComponent = (
    <>
      <SetupBackButton
        onBack={() => toStep(STEP.SELECT_LIFE, DIRECTION.BACK)}
      />
      <h1>Set timer</h1>
      <SelectOptions options={TIMER} setOption={setTimerOption} />
    </>
  );

  return <SetupLayout setupComponent={SelectTimerComponent} />;
};

export default SelectTimer;
