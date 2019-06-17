import * as React from "react";
import { useContext, useCallback } from "react";
import Square from "./Square";
import { gameContext } from "./Game";
import StatusBar from "./StatusBar";

export default function Board() {
  const { items, dispatch } = useContext(gameContext);
  //console.log(items);

  const squareClickHandler = useCallback(
    (index: number) => {
      const actionType: string = "setItem";
      dispatch({ type: actionType, payload: { index } });
    },
    [dispatch]
  );

  let squares = items.map((value: string, index: number) => (
    <Square
      value={value}
      index={index}
      key={index}
      onClick={squareClickHandler}
    />
  ));

  return (
    <div>
      <StatusBar />
      <div className="board">{squares}</div>
    </div>
  );
}
