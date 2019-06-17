import * as React from "react";
import { useContext } from "react";
import { gameContext } from "./Game";

export default function StatusBar() {
  const { turn, winner, dispatch } = useContext(gameContext);

  const resetGame = () => {
    dispatch({ type: "resetGame" });
  };

  return (
    <div className="block">
      {winner === "" && <a className="button">Turn: {turn}</a>}
      {winner !== "" && <a className="button">Game is Over! {winner}</a>}
      <button className="button is-primary" onClick={resetGame}>
        Restart
      </button>
    </div>
  );
}
