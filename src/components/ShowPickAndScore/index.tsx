import React, { cloneElement } from "react";

import { ChoiceT, ModeT } from "constant/types/types";
import { ShowPlayerStyle, ScoreDiv } from "./styles";

type Props = {
  user: ChoiceT | undefined;
  computer: ChoiceT | undefined;
  playerScore: number;
  computerOneScore: number;
  computerTwoScore: number;
  mode: ModeT;
};

const ShowPickAndScores: React.FC<Props> = ({
  playerScore,
  computerOneScore,
  computerTwoScore,
  user,
  computer,
  mode,
}) => {
  return (
    <ShowPlayerStyle>
      {mode === "user" && (
        <ScoreDiv>
          <h4>Your Choice</h4>
          <div className="icon">{user?.icon && cloneElement(user.icon)}</div>
          <h4>{playerScore}</h4>
        </ScoreDiv>
      )}
      <ScoreDiv>
        <h4>{mode === "user" ? "Computer Choice" : "Computer One Choice"}</h4>
        <div>{computer?.icon && cloneElement(computer.icon)}</div>
        <h4>{computerOneScore}</h4>
      </ScoreDiv>
      {mode === "computer" && (
        <ScoreDiv>
          <h4>Computer Two Choice</h4>
          <div>{computer?.icon && cloneElement(computer.icon)}</div>
          <h4>{computerOneScore}</h4>
        </ScoreDiv>
      )}
    </ShowPlayerStyle>
  );
};

export default ShowPickAndScores;
