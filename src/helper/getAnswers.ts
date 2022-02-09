import { ChoiceT } from "constant/types/types";

type functionReturn = {
  player: number;
  computer: number;
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
        message: "YOU WIN!!!",
        player: scores.player++,
        id: player.id,
      };
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      return {
        ...scores,
        message: "It is a Tie!!!",
      };
    default:
      return caseValue
        ? {
            ...scores,
            message: "COMPUTER WIN!!!",
            computer: scores.computer++,
          }
        : {
            ...scores,
            message: "",
          };
  }
};
