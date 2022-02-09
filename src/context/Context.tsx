import React, { createContext } from "react";

import { ChoiceT } from "pages/rockscissorspaper";
import { InitialState } from "./Provider";

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
  tries: 0,
  choiceHandler: (choice: ChoiceT) => {},
  restartHandler: () => {},
});
