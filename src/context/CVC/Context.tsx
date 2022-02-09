import { createContext } from "react";

import { CONSTANTS } from "constant/variables";
import {
  ModeT,
  CompInitialState,
} from "constant/types/types";

export interface CVCContextI extends CompInitialState {
  playComputerVsComputer: () => void;
  restartHandler: () => void;
  setMode: (mode: ModeT) => void;
}

export const Context = createContext<CVCContextI>({
  computerOneScore: 0,
  computerTwoScore: 0,
  draw: 0,
  answer: "",
  computerOne: null,
  computerTwo: null,
  tries: CONSTANTS.MAX_TRIES,
  mode: "user",
  playComputerVsComputer: () => {},
  restartHandler: () => {},
  setMode: () => {},
});
