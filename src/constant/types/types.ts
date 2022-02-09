export type ModeT = "user" | "computer";

export interface InitialState {
  playerScore: number;
  computerOneScore: number;
  computerTwoScore: number;
  answer: string;
  user: ChoiceT | null;
  computer: ChoiceT | null;
  tries: number;
  mode: ModeT;
}

export type ChoiceT = {
  id: number;
  icon: any;
  title: string;
  isPress?: boolean;
};
