import * as React from "react";
import Game from "./components/Game";
import Board from "./components/Board";
export default () => {
  return (
    <div className="container">
      <Game>
        <Board />
      </Game>
    </div>
  );
};
