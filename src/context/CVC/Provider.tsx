import React, { useCallback, useContext, useEffect, useState } from "react";

import { Context } from "./Context";
import { choicesArray } from "helper/choices";
import { getAnswer } from "helper/getAnswers";
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
  };

  const playComputerVsComputer = useCallback(() => {
    restartHandler();

    let time: number = CONSTANTS.MAX_TRIES;

    let interval = setInterval(() => {
      if (time < 1) {
        console.log(state.tries);
        clearInterval(interval);
      } else {
        const result = getAnswer(
          state.computerOne as ChoiceT,
          state.computerTwo as ChoiceT
        );
        setState((prev) => ({
          ...prev,
          answer: result.message,
        }));
        setState((prev) => ({
          ...prev,
          tries: (prev.tries -= 1),
        }));

        time -= 1;

        computerOneChoiceFunc();
        computerTwoChoiceFunc();
      }
    }, 1500);

    // eslint-disable-next-line
  }, [getAnswer, state.computerOne, state]);

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

  useEffect(() => {
    const result = getAnswer(
      state.computerOne as ChoiceT,
      state.computerTwo as ChoiceT
    );

    setState((prev) => ({
      ...prev,
      answer: result.message,
    }));

    if (result.message === CONSTANTS.PLAYER_WIN_MSG) {
      setState((prev) => ({
        ...prev,
        computerOneScore: (prev.computerOneScore += 1),
      }));
    } else if (result.message === CONSTANTS.COMPUTER_WIN_MSG) {
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

    // eslint-disable-next-line
  }, [state.computerOne?.title, state.tries]);

  const values = {
    ...state,
    playComputerVsComputer,
    restartHandler,
    setMode,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default CVCProvider;
