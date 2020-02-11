import React from "react";
import { Context } from "../../Context";
import "./modal.css";
import Clock from "./Clock";

export default function GameInfo() {
  return (
    <Context.Consumer>
      {context => {
        const { currentLvl } = context;

        return (
          <div id="game-info">
            <h2>Level {currentLvl}</h2>
            <Clock />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
