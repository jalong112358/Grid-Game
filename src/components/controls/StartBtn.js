import React from "react";

import { Context } from "../../contexts/Context";

export default function StartBtn() {
  return (
    <Context.Consumer>
      {context => {
        const { turnOnGameLoop } = context;

        return (
          <button onClick={turnOnGameLoop} id="start-btn">
            SEQUENCE START
          </button>
        );
      }}
    </Context.Consumer>
  );
}
