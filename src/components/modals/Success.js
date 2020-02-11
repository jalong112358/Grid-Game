import React from "react";
import { Context } from "../../Context";
import "./modal.css";

export default function Success() {
  return (
    <Context.Consumer>
      {context => {
        const { nextLevel, currentLvl, time } = context;

        return (
          <div id="success" className="modal">
            <h1>LEVEL COMPLETE</h1>
            <p>
              Congrats! You passed level {currentLvl} with {time} seconds to
              spare.
            </p>
            <button onClick={nextLevel} style={{ marginTop: "10px" }}>
              NEXT LEVEL
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
