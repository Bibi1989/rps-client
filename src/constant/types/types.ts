export type ModeT = "user" | "computer";

export interface InitialState {
  playerScore: number;
  computerScore: number;
  computerOneScore: number;
  computerTwoScore: number;
  answer: string;
  user: ChoiceT | null;
  computer: ChoiceT | null;
  computerOne: ChoiceT | null;
  computerTwo: ChoiceT | null;
  tries: number;
  mode: ModeT;
}

export type ChoiceT = {
  id: number;
  icon: any;
  title: string;
  isPress?: boolean;
};
