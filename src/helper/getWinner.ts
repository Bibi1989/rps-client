import { ModeT } from "constant/types/types";
import { WINNER_TEXT } from "constant/variables";

export const getWinner = (
  playerScore: number,
  computerOneScore: number,
  mode: ModeT | string
): string => {
  const side =
    playerScore > computerOneScore
      ? WINNER_TEXT.COMPUTER_ONE_WIN
      : WINNER_TEXT.COMPUTER_TWO_WIN;
  const wonMessage = mode === "user" ? WINNER_TEXT.PLAYER_WIN : side;
  const lostMessage = mode === "user" ? WINNER_TEXT.LOST : side;
  return playerScore > computerOneScore
    ? wonMessage
    : playerScore === computerOneScore
    ? WINNER_TEXT.DRAW
    : lostMessage;
};
