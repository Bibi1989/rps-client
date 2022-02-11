import React, { useState } from "react";

import { Action, ActionsBtn } from "./styles";
import { ChoiceT } from "constant/types/types";
import { CONSTANTS } from "constant/variables";
import { pickPlayerWinColor } from "helper/pickPlayerWinColor";

type Props = {
  choices: ChoiceT[];
  answer?: string;
  handleClick: (choices: ChoiceT) => void;
};

const DisplayChoices: React.FC<Props> = ({ choices, answer, handleClick }) => {
  const [selectedId, setSelectedId] = useState(-1);

  console.log("answer === ", answer);
  const handleChoice = (choice: ChoiceT) => {
    handleClick(choice);
    setSelectedId(choice.id);
  };

  return (
    <ActionsBtn>
      {choices.map((choice) => (
        <Action
          key={choice.id}
          onClick={() => handleChoice(choice)}
          color={pickPlayerWinColor(answer as string, selectedId === choice.id)}
        >
          <i className={`fas fa-hand-${choice.title}`}></i>
          <p style={{}}>{choice.title}</p>
        </Action>
      ))}
    </ActionsBtn>
  );
};

export default DisplayChoices;
