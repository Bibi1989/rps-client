import React from "react";

import { ChoiceT, ModeT } from "constant/types/types";
import { ShowPlayerStyle, ScoreDiv } from "./styles";

type PlayerT = {
  score: number;
  player: ChoiceT | null;
};

type Props = {
  playerOne: PlayerT;
  playerTwo: PlayerT;
  mode: ModeT | string;
  draw: number;
  hideDraw?: boolean;
};

const ShowPickAndScores: React.FC<Props> = ({
  playerOne,
  playerTwo,
  draw,
  mode,
  hideDraw = false,
}) => {
  return (
    <ShowPlayerStyle>
      <ScoreDiv>
        <h4>{mode === "user" ? "Your Choice" : "Computer One Choice"}</h4>
        <div className="icon">
          <i className={`fas fa-hand-${playerOne?.player?.title}`}></i>
        </div>
        <h4>{playerOne.score}</h4>
      </ScoreDiv>
      {!hideDraw && (
        <ScoreDiv>
          <h4>Draw</h4>
          <div className="icon">
            <i className={`fas fa-hand-${playerOne?.player?.title}`}></i>{" "}
            <i className={`fas fa-hand-${playerTwo?.player?.title}`}></i>
          </div>
          <h4>{draw}</h4>
        </ScoreDiv>
      )}
      <ScoreDiv>
        <h4>{mode === "user" ? "Computer Choice" : "Computer Two Choice"}</h4>
        <div>
          <i className={`fas fa-hand-${playerTwo?.player?.title}`}></i>
        </div>
        <h4>{playerTwo.score}</h4>
      </ScoreDiv>
    </ShowPlayerStyle>
  );
};

export default ShowPickAndScores;
