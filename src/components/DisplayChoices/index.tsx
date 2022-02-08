import React, { cloneElement, useState } from "react";

import { Action, ActionsBtn } from "./styles";
import { ChoiceT } from "pages/rockscissorspaper";

type Props = {
  choices: ChoiceT[];
  handleClick: (choices: ChoiceT) => void;
};

const DisplayChoices: React.FC<Props> = ({ choices, handleClick }) => {
  const [selectedID, setSelectedID] = useState(-1);

  const handleSelect = (choice: ChoiceT) => {
    handleClick(choice);
    setSelectedID(choice.id);
    setTimeout(() => setSelectedID(-1), 4500);
  };

  return (
    <ActionsBtn>
      {choices.map((choice) => (
        <Action key={choice.id} onClick={() => handleSelect(choice)}>
          {cloneElement(choice.icon)}
          <p style={{}}>{choice.title}</p>
        </Action>
      ))}
    </ActionsBtn>
  );
};

export default DisplayChoices;
