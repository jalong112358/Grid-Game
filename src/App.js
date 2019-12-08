import React from "react";
import Controls from "./components/controls/Controls";
import GameBoard from "./components/gameBoard/GameBoard";

import Modal from "./components/modals/Modal";

import ContextProvider from "./contexts/Context";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Modal />

        <main>
          <Controls />
          <GameBoard />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
