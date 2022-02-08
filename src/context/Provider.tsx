import React, { useContext, useReducer, useState } from "react";

import { ChoiceT } from "pages/rockscissorspaper";
import {
  updateAnswerAction,
  updateComputerStateAction,
  updateTotalTriesAction,
  updateUserStateAction,
} from "./actions";
import { Context } from "./Context";
import { reducer } from "./reducer";
import { choicesArray } from "helper/choices";

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
  tries: 15,
};

export const useRSPGame = () => useContext(Context);

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tryTotal, setTryTotal] = useState(15);

  const choiceHandler = (choice: ChoiceT) => {};

  const computerChoiceFunc = () => {
    const index = Math.floor(Math.random() * choicesArray.length);
    const compChoice = choicesArray.find(
      (choice: ChoiceT) => choice.id === index
    );
  };

  const values = {
    playerScore: state.playerScore,
    computerScore: state.computerScore,
    answer: state.answer,
    user: state.user,
    computer: state.computer,
    tries: state.tries,
    choiceHandler,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default Provider;
