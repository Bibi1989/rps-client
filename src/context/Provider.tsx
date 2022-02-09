import React, { useContext, useEffect, useReducer, useState } from "react";

import { ChoiceT } from "pages/rockscissorspaper";
import {
  updateAnswerAction,
  updateComputerScoreAction,
  updateComputerStateAction,
  updatePlayerScoreAction,
  updateTotalTriesAction,
  updateUserStateAction,
} from "./actions";
import { Context } from "./Context";
import { reducer } from "./reducer";
import { choicesArray } from "helper/choices";
import { getAnswer } from "helper/getAnswers";
import { CONSTANTS } from "constant/variables";

export interface InitialState {
  playerScore: number;
  computerScore: number;
  answer: string;
  user: ChoiceT | null;
  computer: ChoiceT | null;
  tries: number;
}

const initialState: InitialState = {
  playerScore: 0,
  computerScore: 0,
  computer: null,
  user: null,
  answer: "",
  tries: CONSTANTS.MAX_TRIES,
};

export const useRSPGame = () => useContext(Context);

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tryTotal, setTryTotal] = useState(CONSTANTS.MAX_TRIES);

  const choiceHandler = (choice: ChoiceT) => {
    computerChoiceFunc();
    dispatch(updateUserStateAction(choice));
    const result = getAnswer(state.user as ChoiceT, state.computer as ChoiceT);
    dispatch(updateAnswerAction(result.message));
    setTryTotal((prev: number) => (prev -= 1));
    dispatch(updateTotalTriesAction(tryTotal));
  };

  const computerChoiceFunc = () => {
    const index = Math.floor(Math.random() * choicesArray.length);
    const compChoice = choicesArray.find(
      (choice: ChoiceT) => choice.id === index
    );
    dispatch(updateComputerStateAction(compChoice));
  };

  const restartHandler = () => {
    dispatch(updateComputerScoreAction(0));
    dispatch(updatePlayerScoreAction(0));
    dispatch(updateAnswerAction(""));
    dispatch(updateTotalTriesAction(CONSTANTS.MAX_TRIES));
  };

  useEffect(() => {
    const result = getAnswer(state.user, state.computer);

    dispatch(updateAnswerAction(result.message));

    if (result.message === "YOU WIN!!!") {
      dispatch(updatePlayerScoreAction((state.playerScore += 1)));
    } else if (result.message === "COMPUTER WIN!!!") {
      dispatch(updateComputerScoreAction((state.computerScore += 1)));
    }
  }, [
    state.user?.title,
    state.computer?.title,
    updateComputerScoreAction,
    updatePlayerScoreAction,
    tryTotal,
  ]);

  const values = {
    playerScore: state.playerScore,
    computerScore: state.computerScore,
    answer: state.answer,
    user: state.user,
    computer: state.computer,
    tries: state.tries,
    choiceHandler,
    restartHandler,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;
