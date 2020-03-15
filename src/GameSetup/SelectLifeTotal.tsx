import React from "react";
import { STEP, LIFE_TOTAL, ISetupStep, DIRECTION } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";
import SetupLayout from "../Components/SetupLayout";
import SetupBackButton from "../Components/SetupBackButton";

interface Props extends ISetupStep {
  setLifeTotal: (lifeTotal: LIFE_TOTAL) => void;
}

const SelectLifeTotal = ({ toStep, setLifeTotal }: Props) => {
  const setLifeOption = (life: LIFE_TOTAL) => {
    setLifeTotal(life);
    toStep(STEP.SELECT_TIMER, DIRECTION.FORTH);
  };

  const SelectLifeComponent = (
    <>
      <SetupBackButton onBack={() => toStep(STEP.HOME, DIRECTION.BACK)} />
      <h1>Set starting life</h1>
      <SelectOptions options={LIFE_TOTAL} setOption={setLifeOption} />
    </>
  );

  return <SetupLayout setupComponent={SelectLifeComponent} />;
};

export default SelectLifeTotal;
