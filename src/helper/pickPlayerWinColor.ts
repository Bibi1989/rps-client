import { CONSTANTS } from "constant/variables";

export const pickPlayerWinColor = (answer: string, isSelected: boolean) =>
  answer === CONSTANTS.PLAYER_WIN_MSG && isSelected
    ? "green"
    : answer === CONSTANTS.COMPUTER_WIN_MSG && isSelected
    ? "red"
    : "";
