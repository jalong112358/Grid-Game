import React from "react";
import { Context } from "../../Context";
import "./modal.css";

export default function Fail() {
  return (
    <Context.Consumer>
      {context => {
        const { restartLevel } = context;

        return (
          <div id="fail" className="modal">
            <h1>LEVEL FAILED</h1>
            <button onClick={restartLevel}>RESTART</button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
