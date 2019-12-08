import React from "react";
import { Context } from "../../contexts/Context";

import "./gameBoard.css";
import Grid from "./Grid";
import Walls from "./Walls";
import Player from "./Player";
import Checkpoint from "./Checkpoint";

export default function GameBoard() {
  return (
    <Context.Consumer>
      {context => {
        const { lvlData, checkpointPosition } = context;

        return (
          <div id="game-board">
            <Grid />
            <Walls walls={lvlData.walls} />
            <Checkpoint position={checkpointPosition} />
            <Player />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
