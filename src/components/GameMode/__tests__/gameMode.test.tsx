import * as React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { CONSTANTS } from "constant/variables";
import GameMode from "../";
import { CVCContextI } from "context/CVC/Context";
import { PVCContextI } from "context/PVC/Context";
import { ChoiceT, ModeT } from "constant/types/types";
import Rock from "assets/images/icons/Rock";
import Scissors from "assets/images/icons/Scissors";

let documentBody: RenderResult;

type Props = {
  state: CVCContextI | PVCContextI;
  scoreOne: number;
  scoreTwo: number;
  draw: number;
  playerOne: ChoiceT | null;
  playerTwo: ChoiceT | null;
  mode: ModeT;
  playGame?: (choice: any) => void;
  startCompPlay?: (choice: any) => void;
  reset: () => void;
  setMode: (mode: ModeT) => void;
};

const playerOne = {
  id: 1,
  title: "rock",
  icon: <Rock />,
};

const playerTwo = {
  id: 1,
  title: "rock",
  icon: <Scissors />,
};

type ObjT = {
  pScore: number;
  cScore: number;
  tries: number;
  draw: number;
  mode: ModeT;
};

const props = (obj: ObjT): Props => {
  return {
    state: {
      playerScore: obj.pScore,
      computerScore: obj.cScore,
      draw: obj.draw,
      answer: CONSTANTS.PLAYER_WIN_MSG,
      user: null,
      computer: null,
      tries: obj.tries,
      mode: obj.mode,
      choiceHandler: jest.fn(),
      restartHandler: jest.fn(),
      setMode: jest.fn(),
    },
    scoreOne: 5,
    scoreTwo: 3,
    draw: 2,
    mode: "user",
    playerOne,
    playerTwo,
    playGame: jest.fn(),
    startCompPlay: jest.fn(),
    reset: jest.fn(),
    setMode: jest.fn(),
  };
};

describe("Game Mode", () => {
  it("Render game mode components", () => {
    const obj = {
      pScore: 0,
      cScore: 0,
      tries: CONSTANTS.MAX_TRIES,
      draw: 0,
      mode: "user" as ModeT,
    };
    documentBody = render(<GameMode {...props(obj)} />);
    expect(
      documentBody.getByText(CONSTANTS.PLAYER_WIN_MSG)
    ).toBeInTheDocument();
  });
});
