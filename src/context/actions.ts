import { ChoiceT } from "pages/rockscissorspaper";
import {
  ANSWER,
  COMPUTER,
  COMPUTER_SCORE,
  PLAYER_SCORE,
  TOTAL_TRIES,
  USER,
} from "./types";

export const updateUserStateAction = (choice: ChoiceT) => ({
  type: USER,
  payload: choice,
});

export const updateComputerStateAction = (choice: ChoiceT | undefined) => ({
  type: COMPUTER,
  payload: choice,
});

export const updateAnswerAction = (answer: string) => ({
  type: ANSWER,
  payload: answer,
});

export const updateTotalTriesAction = (tries: number) => ({
  type: TOTAL_TRIES,
  payload: tries,
});

export const updatePlayerScoreAction = (score: number) => ({
  type: PLAYER_SCORE,
  payload: score,
});

export const updateComputerScoreAction = (score: number) => ({
  type: COMPUTER_SCORE,
  payload: score,
});
