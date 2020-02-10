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
            <h1>Welcome</h1>
            <p>jkivgaeybeavb</p>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
