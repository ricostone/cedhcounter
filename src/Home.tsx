import React from "react";
import { STEP, DIRECTION, ISetupStep } from "./Contracts";
import CoverAnimation from "./Components/CoverAnimation";

const Home = ({ toStep }: ISetupStep) => {
  return (
    <>
      <CoverAnimation />
      <div className="container h-100 headline">
        <div className="row">
          <div className="col-12 m-5 app-title text-center">
            <h1 className={"text-center"}>cEDH Counter</h1>
          </div>
          <div className="col-12 text-center">
            <button
              className={"btn btn-primary col-8 m-3"}
              onClick={() => toStep(STEP.SELECT_LIFE, DIRECTION.FORTH)}
            >
              New Game
            </button>
          </div>
          <div className="col-12 text-center">
            <button
              className={"btn btn-secondary col-8 m-3"}
              onClick={() => alert("settings")}
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
