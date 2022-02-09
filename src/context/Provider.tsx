import React, { useCallback, useContext, useEffect, useState } from "react";

import { Context } from "./Context";
import { choicesArray } from "helper/choices";
import { getAnswer } from "helper/getAnswers";
import { CONSTANTS } from "constant/variables";
import { InitialState, ChoiceT } from "constant/types/types";

export const useRSPGame = () => useContext(Context);

const Provider: React.FC = ({ children }) => {
  const [state, setState] = useState<InitialState>({
    playerScore: 0,
    computerScore: 0,
    computer: null,
    user: null,
    answer: "",
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

  const restartHandler = () => {
    setState((prev) => ({
      ...prev,
      playerScore: 0,
      computerScore: 0,
      answer: "",
      tries: CONSTANTS.MAX_TRIES as number,
    }));
  };

  useEffect(() => {
    const result = getAnswer(state.user as ChoiceT, state.computer as ChoiceT);

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

    // eslint-disable-next-line 
  }, [state.user?.title, state.computer?.title, state.tries]);

  const values = {
    ...state,
    choiceHandler,
    restartHandler,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;
