import GameMode from "components/GameMode";
import { usePVCGame } from "context/PVC/Provider";
import { useCVCGame } from "context/CVC/Provider";
import { Container } from "./styles";
import { useLayout } from "context/Layout/Provider";
import { ModeT } from "constant/types/types";

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

  const { mode, setMode } = layout;

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
          setMode={setMode}
          mode={mode as ModeT}
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
          setMode={setMode}
          mode={mode as ModeT}
        />
      )}
    </Container>
  );
};

export default RockScissorsPaper;
