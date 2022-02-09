export interface InitialState {
  playerScore: number;
  computerScore: number;
  answer: string;
  user: ChoiceT | null;
  computer: ChoiceT | null;
  tries: number;
}

export type ChoiceT = {
  id: number;
  icon: any;
  title: string;
  isPress?: boolean;
};
