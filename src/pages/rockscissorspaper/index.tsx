import GameMode from "components/GameMode";
import { usePVCGame } from "context/PVC/Provider";
import { useCVCGame } from "context/CVC/Provider";
import { Container } from "./styles";
import { useLayout } from "context/Layout/Provider";

const RockScissorsPaper = () => {
  const userState = usePVCGame();
  const computerState = useCVCGame();
  const layout = useLayout();

  const {
    playerScore,
    computerScore,
    draw,
    user,
    computer,
    choiceHandler,
    restartHandler: playerReset,
  } = userState;
  const {
    computerOneScore,
    computerTwoScore,
    draw: compDraw,
    computerOne,
    computerTwo,
    playComputerVsComputer,
    restartHandler: compReset,
  } = computerState;
  const { mode } = layout;

  return (
    <Container>
      {mode === "user" ? (
        <GameMode
          state={userState}
          scoreOne={playerScore}
          scoreTwo={computerScore}
          draw={draw}
          playerOne={user}
          playerTwo={computer}
          playGame={choiceHandler}
          reset={playerReset}
        />
      ) : (
        <GameMode
          state={computerState}
          scoreOne={computerOneScore}
          scoreTwo={computerTwoScore}
          draw={compDraw}
          playerOne={computerOne}
          playerTwo={computerTwo}
          startCompPlay={playComputerVsComputer}
          reset={compReset}
        />
      )}
    </Container>
  );
};

export default RockScissorsPaper;
