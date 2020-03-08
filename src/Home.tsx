import React from "react";
import { STEP, DIRECTION, ISetupStep } from "./Contracts";
import { Mana } from "@saeris/react-mana";
import { Keyrune } from "@saeris/react-keyrune";

const Home = ({ toStep }: ISetupStep) => {
  return (
    <div className="container h-100">
      <div className="row">
        <div className="col-12 text-center m-5 app-title">
          <h1>
            <Mana symbol="guild-dimir" fixed size="2x" /> cEDH Counter{" "}
            <Keyrune set="leg" rarity="mythic" gradient fixed size="2x" />
          </h1>
        </div>
        <div className="col-12 text-center">
          <button
            className={"btn btn-primary col-8 m-5"}
            onClick={() => toStep(STEP.SELECT_LIFE, DIRECTION.FORTH)}
          >
            New Game
          </button>
        </div>
        <div className="col-12 text-center">
          <button
            className={"btn btn-secondary col-8 m-5"}
            onClick={() => alert("settings")}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
