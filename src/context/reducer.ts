import { InitialState } from "./Provider";
import { PLAYER_SCORE, SCORES, TOTAL_TRIES } from "./types";

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
    default:
      return state;
  }
};
