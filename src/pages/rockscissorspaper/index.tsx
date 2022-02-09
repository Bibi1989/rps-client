import DisplayChoices from "components/DisplayChoices";
import DisplayWin from "components/DisplayWin";
import RestartGame from "components/RestartGame";
import SetMode from "components/SetMode";
import ShowPickAndScores from "components/ShowPickAndScore";
import { ChoiceT } from "constant/types/types";
import { useRSPGame } from "context/Provider";
import { choicesArray } from "helper/choices";
import { getWinner } from "helper/getWinner";
import {
  Container,
  InnerContainer,
  VerticalSpacing,
  TotalTries,
} from "./styles";

const RockScissorsPaper = () => {
  const {
    tries,
    computerOneScore,
    computerTwoScore,
    playerScore,
    user,
    computer,
    answer,
    mode,
    choiceHandler,
    restartHandler,
    setMode,
  } = useRSPGame();

  const winnerText =
    tries === 0
      ? getWinner(playerScore, computerOneScore, computerTwoScore)
      : "";

  return (
    <Container>
      <InnerContainer>
        <h2>ROCK SCISSORS PAPER</h2>
        <VerticalSpacing />
        <SetMode setMode={setMode} mode={mode} />
        <VerticalSpacing height={20} />
        <TotalTries>Tries: {tries}</TotalTries>
        <VerticalSpacing height={20} />
        <ShowPickAndScores
          playerScore={playerScore}
          computerOneScore={computerOneScore}
          computerTwoScore={computerTwoScore}
          user={user as ChoiceT}
          computer={computer as ChoiceT}
          mode={mode}
        />
        <VerticalSpacing height={20} />
        {tries > 0 && (
          <DisplayChoices choices={choicesArray} handleClick={choiceHandler} />
        )}
        <VerticalSpacing height={20} />
        {tries === 0 && (
          <RestartGame onClick={restartHandler}>Restart</RestartGame>
        )}
        <VerticalSpacing />
        <DisplayWin answer={winnerText ? winnerText : answer} />
      </InnerContainer>
    </Container>
  );
};

export default RockScissorsPaper;
