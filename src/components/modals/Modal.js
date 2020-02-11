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
          <div
            id="modal-area"
            style={{
              top: fail.status || success ? "300px" : "0",
              padding: fail.status || success ? "0 220px" : "0"
            }}
          >
            <div className="modal-box">
              {" "}
              {fail.status ? (
                <Fail />
              ) : success ? (
                <Success />
              ) : (
                <DefaultModal />
              )}
            </div>

            <GameInfo />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
