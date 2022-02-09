import React, { useCallback, useContext, useEffect, useState } from "react";

import { Context } from "./Context";
import { choicesArray } from "helper/choices";
import { getAnswer, getComputerAnswer } from "helper/getAnswers";
import { CONSTANTS } from "constant/variables";
import { InitialState, ChoiceT, ModeT } from "constant/types/types";

export const useRSPGame = () => useContext(Context);

const Provider: React.FC = ({ children }) => {
  const [state, setState] = useState<InitialState>({
    playerScore: 0,
    computerScore: 0,
    computerOneScore: 0,
    computerTwoScore: 0,
    computer: null,
    user: null,
    computerOne: null,
    computerTwo: null,
    answer: "",
    mode: "user",
    tries: CONSTANTS.MAX_TRIES as number,
  });

  const choiceHandler = useCallback(
    (choice: ChoiceT) => {
      computerChoiceFunc();
      setState((prev) => ({
        ...prev,
        user: choice,
      }));
      const result = getAnswer(
        state.user as ChoiceT,
        state.computer as ChoiceT
      );
      setState((prev) => ({
        ...prev,
        answer: result.message,
      }));
      setState((prev) => ({
        ...prev,
        tries: (prev.tries -= 1),
      }));
    },
    // eslint-disable-next-line
    [state.user?.title, state.computer?.title]
  );

  const computerChoiceFunc = () => {
    const index = Math.floor(Math.random() * choicesArray.length);
    const compChoice = choicesArray.find(
      (choice: ChoiceT) => choice.id === index
    ) as ChoiceT;
    setState((prev) => ({
      ...prev,
      computer: compChoice,
    }));
  };

  const computerTwoChoiceFunc = (type: number) => {
    if (type === 1) {
      const index = Math.floor(Math.random() * choicesArray.length);
      const compChoice = choicesArray.find(
        (choice: ChoiceT) => choice.id === index
      ) as ChoiceT;
      setState((prev) => ({
        ...prev,
        computerOne: compChoice,
      }));
    } else {
      const index = Math.floor(Math.random() * choicesArray.length);
      const compChoice = choicesArray.find(
        (choice: ChoiceT) => choice.id === index
      ) as ChoiceT;
      setState((prev) => ({
        ...prev,
        computerTwo: compChoice,
      }));
    }
  };

  const playComputerVsComputer = useCallback(() => {
    restartHandler();

    const interval = setInterval(() => {
      const result = getComputerAnswer(
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

      computerTwoChoiceFunc(1);
      computerTwoChoiceFunc(2);
    }, 3000);

    if (state.tries <= 1) {
      clearInterval(interval);
    }

    // eslint-disable-next-line
  }, [getComputerAnswer, state.computerOne, state]);

  const setMode = (mode: ModeT) => {
    setState((prev) => ({
      ...prev,
      mode,
    }));
  };

  const restartHandler = () => {
    setState({
      ...state,
      playerScore: 0,
      computerScore: 0,
      answer: "",
      tries: CONSTANTS.MAX_TRIES,
    });
  };

  useEffect(() => {
    const result = getAnswer(state.user as ChoiceT, state.computer as ChoiceT);
    const computerResult = getComputerAnswer(
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
        playerScore: (prev.playerScore += 1),
      }));
    } else if (result.message === CONSTANTS.COMPUTER_WIN_MSG) {
      setState((prev) => ({
        ...prev,
        computerScore: (prev.computerScore += 1),
      }));
    }
    if (computerResult.message === CONSTANTS.COMPUTER_ONE_WIN_MSG) {
      setState((prev) => ({
        ...prev,
        computerOneScore: (prev.computerOneScore += 1),
      }));
    } else if (computerResult.message === CONSTANTS.COMPUTER_TWO_WIN_MSG) {
      setState((prev) => ({
        ...prev,
        computerTwoScore: (prev.computerTwoScore += 1),
      }));
    }

    console.log(computerResult.message);

    // eslint-disable-next-line
  }, [state.user?.title, state.computer?.title, state.tries]);

  const values = {
    ...state,
    choiceHandler,
    restartHandler,
    setMode,
    playComputerVsComputer,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;
