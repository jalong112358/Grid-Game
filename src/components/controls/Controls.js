import React, { useState } from "react";
import Console from "./Console";
import Inputs from "./Inputs";
import StartBtn from "./StartBtn";

import "./controls.css";

function Controls() {
  return (
    <div id="controls">
      <Console />
      <Inputs />
      <StartBtn />
    </div>
  );
}

export default Controls;
