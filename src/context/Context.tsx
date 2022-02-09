import { createContext } from "react";

import { CONSTANTS } from "constant/variables";
import { InitialState, ChoiceT } from "constant/types/types";

interface ContextI extends InitialState {
  choiceHandler: (choice: ChoiceT) => void;
  restartHandler: () => void;
}

export const Context = createContext<ContextI>({
  playerScore: 0,
  computerScore: 0,
  answer: "",
  user: null,
  computer: null,
  tries: CONSTANTS.MAX_TRIES as number,
  choiceHandler: (choice: ChoiceT) => {},
  restartHandler: () => {},
});
