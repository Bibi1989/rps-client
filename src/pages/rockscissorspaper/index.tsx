import DisplayChoices from "components/DisplayChoices";
import DisplayWin from "components/DisplayWin";
import RestartGame from "components/RestartGame";
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
    computerScore,
    playerScore,
    user,
    computer,
    answer,
    choiceHandler,
    restartHandler,
  } = useRSPGame();

  const winnerText = tries === 0 ? getWinner(playerScore, computerScore) : "";

  return (
    <Container>
      <InnerContainer>
        <h2>ROCK SCISSORS PAPER</h2>
        <VerticalSpacing />
        <TotalTries>Tries: {tries}</TotalTries>
        <VerticalSpacing height={20} />
        <ShowPickAndScores
          playerScore={playerScore}
          computerScore={computerScore}
          user={user as ChoiceT}
          computer={computer as ChoiceT}
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
