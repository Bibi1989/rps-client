import DisplayChoices from "components/DisplayChoices";
import ShowPickAndScores from "components/ShowPickAndScore";
import { useRSPGame } from "context/Provider";
import { choicesArray } from "helper/choices";
import {
  Container,
  InnerContainer,
  VerticalSpacing,
  TotalTries,
} from "./styles";

export type ChoiceT = {
  id: number;
  icon: any;
  title: string;
  isPress?: boolean;
};

const RockScissorsPaper = () => {
  const { tries, computerScore, playerScore, user, computer, choiceHandler } =
    useRSPGame();

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
      </InnerContainer>
    </Container>
  );
};

export default RockScissorsPaper;
