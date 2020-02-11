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
              Move the <span className="highlight blue">blue</span> square to
              the <span className="highlight yellow">yellow</span> square before
              the time runs out. Use the controls to set your path, then select{" "}
              <span className="highlight green">Sequence Start</span> to run the
              program.
            </p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
