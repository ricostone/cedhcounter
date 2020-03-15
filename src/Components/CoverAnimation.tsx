import React from "react";
import { Mana } from "@saeris/react-mana";
import "./coverAnimation.scss";

interface Props {}

const CoverAnimation = () => {
  return (
    <div className={"cover-animation"}>
      <div className="animation-container">
        <div className="mana-green circle-animation speed-1">
          <div className="counter">
            <div className="inner">
              <Mana symbol="g" fixed size="2x" />
            </div>
          </div>
        </div>

        <div className="mana-blue circle-animation speed-2">
          <div className="counter">
            <div className="inner">
              <Mana symbol="u" fixed size="2x" />
            </div>
          </div>
        </div>

        <div className="mana-red circle-animation speed-5">
          <div className="counter">
            <div className="inner">
              <Mana symbol="r" fixed size="2x" />
            </div>
          </div>
        </div>

        <div className="mana-black circle-animation speed-3">
          <div className="counter">
            <div className="inner">
              <Mana symbol="b" fixed size="2x" />
            </div>
          </div>
        </div>
        <div className="mana-white circle-animation speed-4">
          <div className="counter">
            <div className="inner">
              <Mana symbol="w" fixed size="2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverAnimation;
