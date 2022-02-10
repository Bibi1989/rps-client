import React, { useContext, useState } from "react";

import { Context } from "./Context";
import { choicesArray } from "helper/choices";
import { getComputerAnswer } from "helper/getAnswers";
import { CONSTANTS } from "constant/variables";
import { ChoiceT, ModeT, CompInitialState } from "constant/types/types";

export const useCVCGame = () => useContext(Context);

const CVCProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CompInitialState>({
    computerOneScore: 0,
    computerTwoScore: 0,
    draw: 0,
    computerOne: null,
    computerTwo: null,
    answer: "",
    mode: "user",
    tries: CONSTANTS.MAX_TRIES as number,
  });

  const computerOneChoiceFunc = () => {
    const index = Math.floor(Math.random() * choicesArray.length);
    const compChoice = choicesArray.find(
      (choice: ChoiceT) => choice.id === index
    ) as ChoiceT;
    setState((prev) => ({
      ...prev,
      computerOne: compChoice,
    }));
    return compChoice;
  };

  const computerTwoChoiceFunc = () => {
    const index = Math.floor(Math.random() * choicesArray.length);
    const compChoice = choicesArray.find(
      (choice: ChoiceT) => choice.id === index
    ) as ChoiceT;
    setState((prev) => ({
      ...prev,
      computerTwo: compChoice,
    }));
    return compChoice;
  };

  const playComputerVsComputer = (() => {
    let total: number = 0;
    let timer: number | any;
    return () => {
      const choiceOne = computerOneChoiceFunc();
      const choiceTwo = computerTwoChoiceFunc();

      const result = getComputerAnswer(
        choiceOne as ChoiceT,
        choiceTwo as ChoiceT
      );

      setState((prev) => ({
        ...prev,
        answer: result.message,
      }));
      setState((prev) => ({
        ...prev,
        tries: (prev.tries -= 1),
      }));

      setState((prev) => ({
        ...prev,
        answer: result.message,
      }));

      if (result.message === CONSTANTS.COMPUTER_ONE_WIN_MSG) {
        setState((prev) => ({
          ...prev,
          computerOneScore: (prev.computerOneScore += 1),
        }));
      } else if (result.message === CONSTANTS.COMPUTER_TWO_WIN_MSG) {
        setState((prev) => ({
          ...prev,
          computerTwoScore: (prev.computerTwoScore += 1),
        }));
      } else if (result.message === CONSTANTS.DRAW) {
        setState((prev) => ({
          ...prev,
          draw: (prev.draw += 1),
        }));
      }

      total += 1;

      timer = setTimeout(() => {
        clearTimeout(timer);

        if (total !== state.tries) playComputerVsComputer();
      }, 1000);
    };
  })();

  const setMode = (mode: ModeT) => {
    setState((prev) => ({
      ...prev,
      mode,
    }));
  };

  const restartHandler = () => {
    setState({
      computerOneScore: 0,
      computerTwoScore: 0,
      draw: 0,
      computerOne: null,
      computerTwo: null,
      answer: "",
      mode: "user",
      tries: CONSTANTS.MAX_TRIES,
    });
  };

  const values = {
    ...state,
    playComputerVsComputer,
    restartHandler,
    setMode,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default CVCProvider;
