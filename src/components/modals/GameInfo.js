import React from "react";
import { Context } from "../../Context";
import "./modal.css";

export default function GameInfo() {
  return (
    <Context.Consumer>
      {context => {
        const { currentLvl } = context;

        return (
          <div id="game-info">
            <h2>Level {currentLvl}</h2>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
