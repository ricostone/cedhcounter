import React, { useState } from 'react';
import './App.css';
import { STEP, LIFE_TOTAL, TIMER, PLAYERS } from './Contracts';
import Home from './GameSetup/Home';
import SelectLifeTotal from './GameSetup/SelectLifeTotal';
import SelectPlayersNumber from './GameSetup/SelectPlayersNumber';
import SelectTimer from './GameSetup/SelectTimer';
import Board from './Board';

function App() {

  const [step, setStep] = useState(STEP.HOME);
  const [lifeTotal, setLifeTotal] = useState(LIFE_TOTAL.l40);
  const [timerTotal, setTimer] = useState(TIMER.none);
  const [playersNumber, setPlayersNumber] = useState(PLAYERS.p5);

  switch(step){
    case STEP.SELECT_LIFE:
      return <SelectLifeTotal setStep={setStep} setLifeTotal={setLifeTotal} />;
    case STEP.SELECT_TIMER:
      return <SelectTimer setStep={setStep} setTimer={setTimer} />;
    case STEP.SELECT_PLAYERS_NUMBER:
      return <SelectPlayersNumber setStep={setStep} setPlayersNumber={setPlayersNumber} />;
    case STEP.BOARD:
      return <Board lifeTotal={lifeTotal} timerTotal={timerTotal} playersNumber={playersNumber} setStep={setStep} />;
    case STEP.HOME:
    default:
      return <Home setStep={setStep} />; 
  }
}

export default App;