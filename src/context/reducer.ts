import { InitialState } from "./Provider";
import {
  ANSWER,
  COMPUTER,
  PLAYER_SCORE,
  SCORES,
  TOTAL_TRIES,
  USER,
} from "./types";

export type Action<T> = {
  type: string;
  payload: T;
};

export const reducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case SCORES:
      return {
        ...state,
        playerScore: action.payload,
      };
    case PLAYER_SCORE:
      return {
        ...state,
        playerScore: action.payload,
      };
    case TOTAL_TRIES:
      return {
        ...state,
        tries: action.payload,
      };
    case COMPUTER:
      return {
        ...state,
        computer: action.payload,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case ANSWER:
      return {
        ...state,
        answer: action.payload,
      };
    default:
      return state;
  }
};
