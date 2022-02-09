import GameMode from "components/GameMode";
import { useRSPGame } from "context/Provider";
import { Container } from "./styles";

const RockScissorsPaper = () => {
  const state = useRSPGame();

  return (
    <Container>
      <GameMode state={state} />
    </Container>
  );
};

export default RockScissorsPaper;
