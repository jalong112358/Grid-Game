import React from "react";
import { Context } from "../../contexts/Context";

export default function Player() {
  return (
    <Context.Consumer>
      {context => {
        const { currentPositionX, currentPositionY } = context;
        return (
          <svg
            className="player"
            style={{
              position: "absolute",
              left: (currentPositionX - 1) * 50,
              top: (currentPositionY - 1) * 50
            }}
            height="50"
            width="50"
            opacity=".5"
          >
            <rect width="43" height="43" fill="#0073C6" />
          </svg>
        );
      }}
    </Context.Consumer>
  );
}
