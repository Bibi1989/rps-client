import { createContext } from "react";

import { CONSTANTS } from "constant/variables";
import { InitialState, ChoiceT, ModeT } from "constant/types/types";

export interface PVCContextI extends InitialState {
  choiceHandler: (choice: ChoiceT) => void;
  restartHandler: () => void;
  setMode: (mode: ModeT) => void;
}

export const Context = createContext<PVCContextI>({
  playerScore: 0,
  computerScore: 0,
  draw: 0,
  answer: "",
  user: null,
  computer: null,
  tries: CONSTANTS.MAX_TRIES,
  mode: "user",
  choiceHandler: (choice: ChoiceT) => {},
  restartHandler: () => {},
  setMode: () => {},
});
