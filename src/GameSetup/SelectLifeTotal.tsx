import React from 'react';
import { STEP, LIFE_TOTAL } from '../Contracts';
import SelectOptions from '../Components/SelectOptions';

interface Props {
    setStep: (step:STEP)=> void,
    setLifeTotal: (lifeTotal:LIFE_TOTAL)=> void,
}

const SelectLifeTotal = ( { setStep, setLifeTotal } : Props ) => {
  return (
    <div className="app">
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.HOME)}>Back</button>
      <SelectOptions options={LIFE_TOTAL} />
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.SELECT_TIMER)} >Set timer</button>
    </div>
  );
}

export default SelectLifeTotal;
