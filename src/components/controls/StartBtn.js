import React from "react";

import { Context } from "../../Context";

export default function StartBtn() {
  return (
    <Context.Consumer>
      {context => {
        const { turnOnMoveBlock } = context;

        return (
          <button onClick={turnOnMoveBlock} id="start-btn">
            SEQUENCE START
          </button>
        );
      }}
    </Context.Consumer>
  );
}
