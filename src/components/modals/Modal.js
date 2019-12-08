import React from "react";
import { Context } from "../../contexts/Context";
import "./modal.css";

import Fail from "./Fail";
import Success from "./Success";
import GameInfo from "./GameInfo";

export default function Modal() {
  return (
    <Context.Consumer>
      {context => {
        const { fail, success } = context;

        return (
          <div id="modal-area">
            <div className="modal-box">
              {" "}
              {fail ? <Fail /> : success ? <Success /> : null}
            </div>

            <GameInfo />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
