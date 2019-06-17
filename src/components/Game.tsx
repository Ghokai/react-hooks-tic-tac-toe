import * as React from "react";
import { useReducer } from "react";

interface gameContextState {
  items: string[];
  turn: string;
  winner: string;
  dispatch: React.Dispatch<any>;
}

const getInitialState = () => ({
  items: ["", "", "", "", "", "", "", "", ""],
  turn: "X",
  winner: ""
});

const initialReducerState = getInitialState();

function reducer(state = initialReducerState, action: any) {
  switch (action.type) {
    case "setItem":
      if (state.items[action.payload.index] !== "" || state.winner !== "") {
        return state;
      }
      state.items[action.payload.index] = state.turn;
      let winner = checkGameState(state.items);
      return {
        items: [...state.items],
        turn: state.turn === "X" ? "O" : "X",
        winner: winner
      };
    case "resetGame":
      return getInitialState();
    default:
      return state;
  }
}

/*
012
345
678
*/
const winStats = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkGameState(items: string[]): string {
  let winner = "";
  for (let i = 0; i < winStats.length; i++) {
    let [x, y, z] = winStats[i];
    if (items[x] !== "" && items[x] === items[y] && items[y] === items[z]) {
      winner = "Winner: " + items[x];
    }
  }

  if (winner === "") {
    let emptyCount = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i] === "") {
        emptyCount++;
      }
    }
    if (emptyCount === 0) {
      winner = "Withdraw";
    }
  }
  return winner;
}

export const gameContext = React.createContext<gameContextState | null>(null);

interface gameProps {
  children?: React.ReactNode;
}

export default function Game(props: gameProps) {
  const [gameState, dispatch] = useReducer(reducer, initialReducerState);
  return (
    <gameContext.Provider value={{ ...gameState, dispatch }}>
      {props.children}
    </gameContext.Provider>
  );
}
