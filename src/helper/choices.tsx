import Paper from "assets/images/icons/Paper";
import Rock from "assets/images/icons/Rock";
import Scissors from "assets/images/icons/Scissors";

export const choicesArray = [
  {
    id: 0,
    icon: <Rock width={"3em"} height={"3em"} />,
    title: "rock",
    isPress: true,
  },
  {
    id: 1,
    icon: <Scissors width={"3em"} height={"3em"} />,
    title: "scissors",
    isPress: false,
  },
  {
    id: 2,
    icon: <Paper width={"3em"} height={"3em"} />,
    title: "paper",
    isPress: false,
  },
];
