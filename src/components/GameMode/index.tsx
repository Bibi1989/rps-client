import { Modal } from "components/commons/Modal";
import DisplayChoices from "components/DisplayChoices";
import DisplayWin from "components/DisplayWin";
import RestartGame from "components/RestartGame";
import SetMode from "components/SetMode";
import ShowPickAndScores from "components/ShowPickAndScore";
import StartGame from "components/StartGame";
import { ChoiceT, ModeT } from "constant/types/types";
import { CVCContextI } from "context/CVC/Context";
import { useCVCGame } from "context/CVC/Provider";
import { PVCContextI } from "context/PVC/Context";
import { choicesArray } from "helper/choices";
import { getWinner } from "helper/getWinner";
import {
  Container,
  InnerContainer,
  VerticalSpacing,
  TotalTries,
} from "pages/rockscissorspaper/styles";
import { useEffect, useState } from "react";

type Props = {
  state: CVCContextI | PVCContextI;
  scoreOne: number;
  scoreTwo: number;
  draw: number;
  mode: ModeT;
  playerOne: ChoiceT | null;
  playerTwo: ChoiceT | null;
  playGame?: (choice: any) => void;
  startCompPlay?: (choice: any) => void;
  reset: () => void;
  setMode: (mode: ModeT) => void;
};

const GameMode: React.FC<Props> = ({
  state,
  scoreOne,
  scoreTwo,
  draw,
  playerOne,
  playerTwo,
  playGame,
  reset,
  mode,
  setMode,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const { tries, answer } = state;

  const { playComputerVsComputer } = useCVCGame();

  const winnerText = tries === 0 ? getWinner(scoreOne, scoreTwo, mode) : "";

  const playerOneObj = {
    score: scoreOne,
    player: playerOne,
  };

  const playerTwoObj = {
    score: scoreTwo,
    player: playerTwo,
  };

  useEffect(() => {
    if (tries === 0) {
      setIsVisible(true);
    }

    // eslint-disable-next-line
  }, [winnerText]);

  return (
    <Container>
      <InnerContainer>
        <h2>ROCK SCISSORS PAPER</h2>
        <VerticalSpacing />
        <SetMode setMode={setMode} mode={mode} reset={reset} />
        <VerticalSpacing height={20} />
        <h4 className="tries_text">Number of moves</h4>
        <TotalTries>Tries: {tries}</TotalTries>
        <VerticalSpacing height={20} />
        <ShowPickAndScores
          playerOne={playerOneObj}
          playerTwo={playerTwoObj}
          draw={draw}
          mode={mode}
        />
        <VerticalSpacing height={20} />
        {tries > 0 && mode === "user" && (
          <DisplayChoices
            choices={choicesArray}
            answer={answer}
            handleClick={playGame ? playGame : () => {}}
          />
        )}
        <VerticalSpacing height={20} />
        {mode === "computer" && (
          <StartGame onClick={playComputerVsComputer}>Start Game</StartGame>
        )}
        <VerticalSpacing height={20} />
        {tries === 0 && (
          <RestartGame
            onClick={() => {
              if (reset) {
                reset();
              }
              setIsVisible(false);
            }}
          >
            Restart game
          </RestartGame>
        )}
        <VerticalSpacing height={20} />
        <DisplayWin answer={winnerText ? winnerText : answer} />
      </InnerContainer>

      <Modal
        isVisible={isVisible}
        toggleVisibility={() => {
          setIsVisible(false);
          reset();
        }}
      >
        <ShowPickAndScores
          playerOne={playerOneObj}
          playerTwo={playerTwoObj}
          draw={draw}
          mode={mode}
        />
        <DisplayWin answer={winnerText ? winnerText : answer} />
        <VerticalSpacing />
        <RestartGame
          onClick={() => {
            if (reset) {
              reset();
            }
            setIsVisible(false);
          }}
        >
          Restart game
        </RestartGame>
      </Modal>
    </Container>
  );
};

export default GameMode;
