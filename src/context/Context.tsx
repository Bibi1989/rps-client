import { createContext } from "react";

import { CONSTANTS } from "constant/variables";
import { InitialState, ChoiceT, ModeT } from "constant/types/types";

interface ContextI extends InitialState {
  choiceHandler: (choice: ChoiceT) => void;
  restartHandler: () => void;
  setMode: (mode: ModeT) => void;
}

export const Context = createContext<ContextI>({
  playerScore: 0,
  computerOneScore: 0,
  computerTwoScore: 0,
  answer: "",
  user: null,
  computer: null,
  tries: CONSTANTS.MAX_TRIES,
  mode: "user",
  choiceHandler: (choice: ChoiceT) => {},
  restartHandler: () => {},
  setMode: () => {},
});
