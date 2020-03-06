import React from 'react';
import { STEP, PLAYERS } from '../Contracts';

interface Props {
    setStep: (step:STEP)=> void,
    setPlayersNumber: (playersNumber:PLAYERS)=> void,
}

const SelectPlayersNumber = ( { setStep, setPlayersNumber } : Props ) => {
  return (
    <div className="app">
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.SELECT_TIMER)}>Back</button>
      Set players
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.BOARD)} >Start the game !</button>
    </div>
  );
}

export default SelectPlayersNumber;
