import { CONSTANTS } from "../../constant/variables";
import { choicesArray } from "../choices";
import { getAnswer, getComputerAnswer } from "../getAnswers";

describe("getAnswer Player Vs Computer", () => {
  const choices = choicesArray;
  test("Player One Win when he choose (ROCK) and Computer choose (SCISSORS)", () => {
    const answer = getAnswer(choices[0], choices[1]);

    expect(answer.message).toBe(CONSTANTS.PLAYER_WIN_MSG);
  });
  test("Player One LOSES when he choose (SCISSORS) and Computer choose (ROCK)", () => {
    const answer = getAnswer(choices[1], choices[0]);

    expect(answer.message).toBe(CONSTANTS.COMPUTER_WIN_MSG);
  });
});

describe("getAnswer Computer Vs Computer", () => {
  const choices = choicesArray;
  test("Computer One Win when he choose (ROCK) and Computer Two choose (SCISSORS)", () => {
    const answer = getComputerAnswer(choices[0], choices[1]);

    expect(answer.message).toBe(CONSTANTS.COMPUTER_ONE_WIN_MSG);
  });
  test("Computer One LOSES when he choose (SCISSORS) and Computer Two choose (ROCK)", () => {
    const answer = getComputerAnswer(choices[1], choices[0]);

    expect(answer.message).toBe(CONSTANTS.COMPUTER_TWO_WIN_MSG);
  });
});
