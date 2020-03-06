import React from 'react';
import { STEP } from '../Contracts';

interface Props {
    setStep: (step:STEP)=> void,
}

const Home = ( { setStep } : Props ) => {
  return (
    <div className="app">
      <div className={"app-title"}>cEDH Counter</div>
      <div className={"app-subtitle"}>Welcome to cEDH Counter !</div>
      <button className={"btn btn-primary"} onClick={()=>setStep(STEP.SELECT_LIFE)} >New Game !</button>
    </div>
  );
}

export default Home;
