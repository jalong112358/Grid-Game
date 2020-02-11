import React from "react";

import { Context } from "../../Context";

export default function StartBtn() {
  return (
    <Context.Consumer>
      {context => {
        const { runGame } = context;

        return (
          <button onClick={runGame} id="start-btn">
            SEQUENCE START
          </button>
        );
      }}
    </Context.Consumer>
  );
}
