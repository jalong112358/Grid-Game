import React from "react";

import { Context } from "../../Context";

export default function ClearBtn() {
  return (
    <Context.Consumer>
      {context => {
        const { clearBoard } = context;

        return (
          <span onClick={clearBoard} id="clear-btn">
            Clear Inputs
          </span>
        );
      }}
    </Context.Consumer>
  );
}
