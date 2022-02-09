import React, { cloneElement } from "react";

import { Action, ActionsBtn } from "./styles";
import { ChoiceT } from "constant/types/types";

type Props = {
  choices: ChoiceT[];
  handleClick: (choices: ChoiceT) => void;
};

const DisplayChoices: React.FC<Props> = ({ choices, handleClick }) => {
  return (
    <ActionsBtn>
      {choices.map((choice) => (
        <Action key={choice.id} onClick={() => handleClick(choice)}>
          {cloneElement(choice.icon)}
          <p style={{}}>{choice.title}</p>
        </Action>
      ))}
    </ActionsBtn>
  );
};

export default DisplayChoices;
