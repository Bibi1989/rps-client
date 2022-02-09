export const getWinner = (
  playerScore: number,
  computerOneScore: number
): string =>
  playerScore > computerOneScore
    ? "Congrat, You Won!!!"
    : playerScore === computerOneScore
    ? "Wow, It is a Tie"
    : "Oops, You Lost";
