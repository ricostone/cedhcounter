import React, { useState } from "react";
import {
  STEP,
  LIFE_TOTAL,
  TIMER,
  PLAYERS,
  DIRECTION,
  IPlayer,
  BOARD_TYPE
} from "./Contracts";
import Home from "./Home";
import SelectLifeTotal from "./GameSetup/SelectLifeTotal";
import SelectPlayersNumber from "./GameSetup/SelectPlayersNumber";
import SelectTimer from "./GameSetup/SelectTimer";
import Board from "./Board/Board";
import SelectPlayersName from "./GameSetup/SelectPlayersName";
import SelectBoard from "./GameSetup/SelectBoard";
import SelectPlayersOrder from "./GameSetup/SelectPlayersOrder";

import "./App.scss";

function App() {
  const [step, setStep] = useState(STEP.HOME);
  const [direction, setDirection] = useState(DIRECTION.FORTH);

  const [lifeTotal, setLifeTotal] = useState(LIFE_TOTAL.l40);
  const [timerTotal, setTimer] = useState(TIMER.none);
  const [playersNumber, setPlayersNumber] = useState(PLAYERS.p5);
  const [boardType, setBoardType] = useState(BOARD_TYPE.Edge);
  const [initPlayers, setInitPlayers] = useState<Array<IPlayer>>([]); // fixed init values

  const toStep = (step: STEP, direction: DIRECTION) => {
    setStep(step);
    setDirection(direction);
  };

  console.log(direction);
  console.log(boardType);

  return (
    <>
      {step === STEP.HOME && <Home toStep={toStep} />}
      {step === STEP.SELECT_LIFE && (
        <SelectLifeTotal toStep={toStep} setLifeTotal={setLifeTotal} />
      )}
      {step === STEP.SELECT_TIMER && (
        <SelectTimer toStep={toStep} setTimer={setTimer} />
      )}
      {step === STEP.SELECT_PLAYERS_NUMBER && (
        <SelectPlayersNumber
          toStep={toStep}
          setPlayersNumber={setPlayersNumber}
        />
      )}
      {step === STEP.SELECT_PLAYERS_NAME && (
        <SelectPlayersName
          toStep={toStep}
          playersNumber={playersNumber}
          timerTotal={timerTotal}
          lifeTotal={lifeTotal}
          setInitPlayers={setInitPlayers}
        />
      )}
      {step === STEP.SELECT_BOARD && (
        <SelectBoard
          toStep={toStep}
          playersNumber={playersNumber}
          setBoardType={setBoardType}
        />
      )}
      {step === STEP.SELECT_PLAYERS_ORDER && (
        <SelectPlayersOrder
          toStep={toStep}
          players={initPlayers}
          setPlayers={setInitPlayers}
        />
      )}
      {step === STEP.BOARD && (
        <Board setStep={setStep} initPlayers={initPlayers} />
      )}
    </>
  );
}

export default App;
