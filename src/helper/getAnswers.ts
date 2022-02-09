import { ChoiceT } from "constant/types/types";
import { CONSTANTS } from "constant/variables";

type functionReturn = {
  player: number;
  computer: number;
  message: string;
  id?: number;
};

type functionComputerReturn = {
  computerOne: number;
  computerTwo: number;
  message: string;
  id?: number;
};

export const getAnswer = (
  player: ChoiceT,
  computer: ChoiceT
): functionReturn => {
  const caseValue = player?.title + computer?.title;

  const scores = {
    player: 0,
    computer: 0,
  };

  switch (caseValue) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      return {
        ...scores,
        message: CONSTANTS.PLAYER_WIN_MSG,
        player: scores.player++,
        id: player.id,
      };
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      return {
        ...scores,
        message: CONSTANTS.DRAW,
      };
    default:
      return caseValue
        ? {
            ...scores,
            message: CONSTANTS.COMPUTER_WIN_MSG,
            computer: scores.computer++,
          }
        : {
            ...scores,
            message: "",
          };
  }
};

export const getComputerAnswer = (
  computerOne: ChoiceT,
  computerTwo: ChoiceT
): functionComputerReturn => {
  const caseValue = computerOne?.title + computerTwo?.title;

  const scores = {
    computerOne: 0,
    computerTwo: 0,
  };

  switch (caseValue) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      return {
        ...scores,
        message: CONSTANTS.COMPUTER_ONE_WIN_MSG,
        computerOne: scores.computerOne++,
        id: computerOne.id,
      };
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      return {
        ...scores,
        message: CONSTANTS.DRAW,
      };
    default:
      return caseValue
        ? {
            ...scores,
            message: CONSTANTS.COMPUTER_TWO_WIN_MSG,
            computerTwo: scores.computerTwo++,
          }
        : {
            ...scores,
            message: "",
          };
  }
};
