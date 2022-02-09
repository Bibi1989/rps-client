import React, { useContext, useState } from "react";

import { Context } from "./Context";
import { CONSTANTS } from "constant/variables";
import { ModeT } from "constant/types/types";

export const useLayout = () => useContext(Context);

const LayoutProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({
    mode: "user",
    answer: "",
    tries: CONSTANTS.MAX_TRIES as number,
  });

  const setMode = (mode: ModeT) => {
    setState((prev) => ({
      ...prev,
      mode,
    }));
  };

  const setAnswer = (answer: string) => {
    setState((prev) => ({
      ...prev,
      answer,
    }));
  };

  const values = {
    ...state,
    setMode,
    setAnswer,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default LayoutProvider;
