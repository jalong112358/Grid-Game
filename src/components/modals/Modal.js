import React from "react";
import { Context } from "../../Context";
import "./modal.css";

import Fail from "./Fail";
import Success from "./Success";
import GameInfo from "./GameInfo";
import DefaultModal from "./DefaultModal";

export default function Modal() {
  return (
    <Context.Consumer>
      {context => {
        const { fail, success } = context;

        return (
          <div id="modal-area">
            <div className="modal-box">
              {" "}
              {fail ? <Fail /> : success ? <Success /> : <DefaultModal />}
            </div>

            <GameInfo />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
