import { getWinner } from "helper/getWinner";
import { CONSTANTS, WINNER_TEXT } from "../../constant/variables";
import { choicesArray } from "../choices";
import { getAnswer, getComputerAnswer } from "../getAnswers";

describe("getWinner user mode", () => {
  test("Player wins when he/her score is more than computer score", () => {
    const score1 = 3;
    const score2 = 2;
    const mode = "user";

    const winnerText = getWinner(score1, score2, mode);

    expect(winnerText).toBe(WINNER_TEXT.PLAYER_WIN);
  });
  test("Player loses when he/her score is less than computer score", () => {
    const score1 = 3;
    const score2 = 6;
    const mode = "user";

    const winnerText = getWinner(score1, score2, mode);

    expect(winnerText).toBe(WINNER_TEXT.LOST);
  });
  test("Player and Computer both draw when scores are the same", () => {
    const score1 = 4;
    const score2 = 4;
    const mode = "user";

    const winnerText = getWinner(score1, score2, mode);

    expect(winnerText).toBe(WINNER_TEXT.DRAW);
  });
});

describe("getAnswer Computer Vs Computer", () => {
  test("Computer One wins when he/her score is more than Computer Two score", () => {
    const score1 = 3;
    const score2 = 2;
    const mode = "user";

    const winnerText = getWinner(score1, score2, mode);

    expect(winnerText).toBe(WINNER_TEXT.PLAYER_WIN);
  });
  test("Computer One loses when he/her score is less than Computer Two score", () => {
    const score1 = 3;
    const score2 = 6;
    const mode = "user";

    const winnerText = getWinner(score1, score2, mode);

    expect(winnerText).toBe(WINNER_TEXT.LOST);
  });
  test("Computer One and Computer Two both draw when scores are the same", () => {
    const score1 = 4;
    const score2 = 4;
    const mode = "user";

    const winnerText = getWinner(score1, score2, mode);

    expect(winnerText).toBe(WINNER_TEXT.DRAW);
  });
});
