import { createContext } from "react";

import { CONSTANTS } from "constant/variables";
import { ModeT } from "constant/types/types";

export interface LayoutContextI {
  tries: number;
  mode: ModeT | string;
  answer: string;
  setMode: (mode: ModeT) => void;
  setAnswer: (answer: string) => void;
}

export const Context = createContext<LayoutContextI>({
  tries: CONSTANTS.MAX_TRIES,
  mode: "user",
  answer: "",
  setMode: (mode: ModeT) => {},
  setAnswer: (answer: string) => {},
});
