import React from 'react';
import { LIFE_TOTAL, TIMER, PLAYERS, STEP } from './Contracts';

interface Props {
  lifeTotal: LIFE_TOTAL,
  timerTotal: TIMER,
  playersNumber: PLAYERS,
  setStep: (step:STEP)=> void,
}

const Board = ( { lifeTotal, timerTotal, playersNumber, setStep } : Props ) => {

  const reset = () => {
    alert("reset!");
  }

  return (
    <div className="app">
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.HOME)}>Home</button>
      <button className={"btn btn-primary"} onClick={()=>reset()}>Reset</button>
      Life total : {lifeTotal}
      Timer total : {timerTotal}
      Players number : {playersNumber}
    </div>
  );
}

export default Board;
