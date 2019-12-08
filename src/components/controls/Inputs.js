import React from "react";
import { Context } from "../../contexts/Context";

export default function Inputs() {
  return (
    <Context.Consumer>
      {context => {
        const { updateDirections } = context;

        return (
          <div>
            <div id="inputs">
              <div className="arrow" onClick={() => updateDirections(0)}>
                <svg height="36" width="36" fill="rgb(24, 24, 24)">
                  <path d="M18 0 L36 36 L0 36 Z" />
                </svg>
              </div>
              <div className="arrow" onClick={() => updateDirections(1)}>
                <svg height="36" width="36" fill="rgb(24, 24, 24)">
                  <path d="M0 0 L36 18 L0 36 Z" />
                </svg>
              </div>
              <div className="arrow" onClick={() => updateDirections(2)}>
                <svg height="36" width="36" fill="rgb(24, 24, 24)">
                  <path d="M0 0 L36 0 L18 36 Z" />
                </svg>
              </div>
              <div className="arrow" onClick={() => updateDirections(3)}>
                <svg height="36" width="36" fill="rgb(24, 24, 24)">
                  <path d="M0 18 L36 0 L36 36 Z" />
                </svg>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
