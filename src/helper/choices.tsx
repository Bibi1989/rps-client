import Paper from "assets/images/icons/Paper";
import Rock from "assets/images/icons/Rock";
import Scissors from "assets/images/icons/Scissors";

import { ChoiceT } from "pages/rockscissorspaper";

export const choicesArray = [
  {
    id: 0,
    icon: <Rock width={"4em"} height={"4em"} />,
    title: "rock",
    isPress: true,
  },
  {
    id: 1,
    icon: <Scissors width={"4em"} />,
    title: "scissors",
    isPress: false,
  },
  {
    id: 2,
    icon: <Paper width={"4em"} />,
    title: "paper",
    isPress: false,
  },
];
