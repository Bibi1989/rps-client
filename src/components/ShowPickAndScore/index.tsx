import React, { cloneElement } from "react";

import { ChoiceT, ModeT } from "constant/types/types";
import { ShowPlayerStyle, ScoreDiv } from "./styles";

type PlayerT = {
  score: number;
  player: ChoiceT | null;
};

type Props = {
  playerOne: PlayerT;
  playerTwo: PlayerT;
  mode: ModeT;
};

const ShowPickAndScores: React.FC<Props> = ({ playerOne, playerTwo, mode }) => {
  return (
    <ShowPlayerStyle>
      <ScoreDiv>
        <h4>Your Choice</h4>
        <div className="icon">
          {playerOne?.player?.icon && cloneElement(playerOne?.player?.icon)}
        </div>
        <h4>{playerOne.score}</h4>
      </ScoreDiv>
      <ScoreDiv>
        <h4>{mode === "user" ? "Computer Choice" : "Computer One Choice"}</h4>
        <div>{playerTwo?.player?.icon && cloneElement(playerTwo.player?.icon)}</div>
        <h4>{playerTwo.score}</h4>
      </ScoreDiv>
    </ShowPlayerStyle>
  );
};

export default ShowPickAndScores;
