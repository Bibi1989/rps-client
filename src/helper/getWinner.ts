export const getWinner = (playerScore: number, computerScore: number): string =>
  playerScore > computerScore
    ? "Congrat, You Won!!!"
    : playerScore === computerScore
    ? "Wow, It is a Tie"
    : "Oops, You Lost";
