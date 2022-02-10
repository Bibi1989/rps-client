export type ModeT = "user" | "computer";

export interface InitialState {
  playerScore: number;
  computerScore: number;
  draw: number;
  answer: string;
  user: ChoiceT | null;
  computer: ChoiceT | null;
  tries: number;
  mode: ModeT;
}

export interface CompInitialState {
  computerOneScore: number;
  computerTwoScore: number;
  draw: number;
  answer: string;
  computerOne: ChoiceT | null;
  computerTwo: ChoiceT | null;
  tries: number;
  mode: ModeT;
}

export type ChoiceT = {
  id: number;
  title: string;
  isPress?: boolean;
};
