import React from "react";
import { Context } from "../Context";
export default function Backdrop() {
  return (
    <Context.Consumer>
      {context => {
        const { fail, success } = context;

        return (
          <div
            id="backdrop"
            style={{
              display: fail.status || success ? "block" : "none"
              // backgroundColor: fail.status
              //   ? "rgba(70, 43, 37, 0.6)"
              //   : success
              //   ? "rgba(32, 70, 47, 0.6)"
              //   : "tranparent"
            }}
          ></div>
        );
      }}
    </Context.Consumer>
  );
}
