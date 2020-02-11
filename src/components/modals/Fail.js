import React from "react";
import { Context } from "../../Context";
import "./modal.css";

export default function Fail() {
  return (
    <Context.Consumer>
      {context => {
        const { restartLevel, fail } = context;

        return (
          <div id="fail" className="modal">
            <h1>LEVEL FAILED</h1>
            <p>{fail.message}</p>
            <button onClick={restartLevel} style={{ marginTop: "10px" }}>
              RESTART
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
