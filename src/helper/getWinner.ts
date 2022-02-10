import { ModeT } from "constant/types/types";

export const getWinner = (
  playerScore: number,
  computerOneScore: number,
  mode: ModeT | string
): string => {
  const side =
    playerScore > computerOneScore ? "Computer One Wins" : "Computer Two Wins";
  const wonMessage = mode === "user" ? "Congrat, You Won!!!" : side;
  const lostMessage = mode === "user" ? "Oops, You Lost" : side;
  return playerScore > computerOneScore
    ? wonMessage
    : playerScore === computerOneScore
    ? "Wow, It is a Tie"
    : lostMessage;
};
