import React, { cloneElement } from "react";

import { ChoiceT } from "constant/types/types";
import { ShowPlayerStyle, ScoreDiv } from "./styles";

type Props = {
  user: ChoiceT | undefined;
  computer: ChoiceT | undefined;
  playerScore: number;
  computerScore: number;
};

const ShowPickAndScores: React.FC<Props> = ({
  playerScore,
  computerScore,
  user,
  computer,
}) => {
  return (
    <ShowPlayerStyle>
      <ScoreDiv>
        <h4>Your Choice</h4>
        <div className="icon">{user?.icon && cloneElement(user.icon)}</div>
        <h4>{playerScore}</h4>
      </ScoreDiv>
      <ScoreDiv>
        <h4>Computer Choice</h4>
        <div>{computer?.icon && cloneElement(computer.icon)}</div>
        <h4>{computerScore}</h4>
      </ScoreDiv>
    </ShowPlayerStyle>
  );
};

export default ShowPickAndScores;
