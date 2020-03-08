import React from "react";
import { STEP, LIFE_TOTAL, ISetupStep, DIRECTION } from "../Contracts";
import SelectOptions from "../Components/SelectOptions";
import { ArrowLeft } from "react-feather";

interface Props extends ISetupStep {
  setLifeTotal: (lifeTotal: LIFE_TOTAL) => void;
}

const SelectLifeTotal = ({ toStep, setLifeTotal }: Props) => {
  const setLifeOption = (life: LIFE_TOTAL) => {
    setLifeTotal(life);
    toStep(STEP.SELECT_TIMER, DIRECTION.FORTH);
  };

  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>
          <button
            className={"btn btn-primary"}
            onClick={() => toStep(STEP.HOME, DIRECTION.BACK)}
          >
            <ArrowLeft />
            Back
          </button>
          <h1>Set starting life</h1>
          <SelectOptions options={LIFE_TOTAL} setOption={setLifeOption} />
        </div>
      </div>
    </div>
  );
};

export default SelectLifeTotal;
