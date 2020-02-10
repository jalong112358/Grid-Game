import React from "react";
import { Context } from "../../Context";
import "./modal.css";

export default function DefaultModal() {
  return (
    <Context.Consumer>
      {context => {
        const { nextLevel } = context;

        return (
          <div id="default-modal" className="modal">
            <h1>Directions</h1>
            <p>
              Use the controls below to set a path for the{" "}
              <span className="highlight blue">blue</span> square to travel.
              Once your path is set, select{" "}
              <span className="highlight green">Sequence Start</span>.
            </p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
