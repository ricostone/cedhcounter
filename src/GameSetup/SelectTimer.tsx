import React from 'react';
import { STEP, TIMER } from '../Contracts';

interface Props {
    setStep: (step:STEP)=> void,
    setTimer: (timerTotal:TIMER)=> void,
}

const SelectTimer = ( { setStep, setTimer } : Props ) => {
  return (
    <div className="app">
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.SELECT_LIFE)}>Back</button>
      Set timer
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.SELECT_PLAYERS_NUMBER)} >Set players</button>
    </div>
  );
}

export default SelectTimer;
