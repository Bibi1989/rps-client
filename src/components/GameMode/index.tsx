import DisplayChoices from "components/DisplayChoices";
import DisplayWin from "components/DisplayWin";
import RestartGame from "components/RestartGame";
import SetMode from "components/SetMode";
import ShowPickAndScores from "components/ShowPickAndScore";
import StartGame from "components/StartGame";
import { ContextI } from "context/Context";
import { choicesArray } from "helper/choices";
import { getWinner } from "helper/getWinner";
import {
  Container,
  InnerContainer,
  VerticalSpacing,
  TotalTries,
} from "pages/rockscissorspaper/styles";

type Props = {
  state: ContextI;
};

const GameMode: React.FC<Props> = ({ state }) => {
  const {
    tries,
    computerTwoScore,
    playerScore,
    computerScore,
    user,
    computer,
    answer,
    mode,
    choiceHandler,
    restartHandler,
    setMode,
    playComputerVsComputer,
  } = state;

  const winnerText =
    tries === 0 ? getWinner(playerScore, computerScore, computerTwoScore) : "";

  const playerOne = {
    score: playerScore,
    player: user,
  };

  const playerTwo = {
    score: computerScore,
    player: computer,
  };
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
          playerOne={playerOne}
          playerTwo={playerTwo}
          mode={mode}
        />
        <VerticalSpacing height={20} />
        {tries > 0 && mode === "user" && (
          <DisplayChoices choices={choicesArray} handleClick={choiceHandler} />
        )}
        <VerticalSpacing height={20} />
        {mode === "computer" && (
          <StartGame onClick={playComputerVsComputer}>Start Game</StartGame>
        )}
        <VerticalSpacing height={20} />
        {tries === 0 && (
          <RestartGame onClick={restartHandler}>Restart game</RestartGame>
        )}
        <VerticalSpacing />
        <DisplayWin answer={winnerText ? winnerText : answer} />
      </InnerContainer>
    </Container>
  );
};

export default GameMode;
