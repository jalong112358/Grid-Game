import React from "react";
import { Context } from "../../Context";
import "./modal.css";

export default function Success() {
  return (
    <Context.Consumer>
      {context => {
        const { nextLevel } = context;

        return (
          <div id="success" className="modal">
            <h1>LEVEL COMPLETE</h1>
            <button onClick={nextLevel}>NEXT LEVEL</button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
