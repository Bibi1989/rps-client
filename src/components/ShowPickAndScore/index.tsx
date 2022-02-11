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
};

const ShowPickAndScores: React.FC<Props> = ({
  playerOne,
  playerTwo,
  draw,
  mode,
}) => {
  return (
    <ShowPlayerStyle>
      <ScoreDiv>
        <h4>{mode === "user" ? "Your Choice" : "Computer One Choice"}</h4>
        <div className="icon">
          <i className={`fas fa-hand-${playerOne?.player?.title}`}>
            {!playerTwo?.player?.title && "?"}
          </i>
          <h4 className="score">{playerOne.score}</h4>
        </div>
      </ScoreDiv>
      <ScoreDiv>
        <h4>Draw</h4>
        <div className="icon">
          <i className={`fas fa-hand-${playerOne?.player?.title} draw`}></i>{" "}
          <i className={`fas fa-hand-${playerTwo?.player?.title} draw`}></i>
          <h4 className="score">{draw}</h4>
        </div>
      </ScoreDiv>
      <ScoreDiv>
        <h4>{mode === "user" ? "Computer Choice" : "Computer Two Choice"}</h4>
        <div className="icon">
          <i className={`fas fa-hand-${playerTwo?.player?.title}`}>
            {!playerTwo?.player?.title && "?"}
          </i>
          <h4 className="score">{playerTwo.score}</h4>
        </div>
      </ScoreDiv>
    </ShowPlayerStyle>
  );
};

export default ShowPickAndScores;
