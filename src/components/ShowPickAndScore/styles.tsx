import styled, { keyframes } from "styled-components";

const move = keyframes`
  0%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(10px);
  }
`;

export const ShowPlayerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
`;

export const ScoreDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    font-size: 3.5em;
    /* color: #5482b1; */

    @media (max-width: 460px) {
      font-size: 2.5em;
    }
  }

  h4 {
    margin-bottom: 10px;

    @media (max-width: 660px) {
      font-size: 12px;
    }
  }

  .icon {
    border: 3px dashed ${({ color }) => (color ? color : "#555555")};
    border-radius: 50px;
    width: 6em;
    height: 6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    .score {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3em;
      color: dodgerblue;
    }

    .draw {
      font-size: 30px;
    }

    &.animate {
      animation: ${move} 0.5s linear 2s infinite alternate;
      color: purple;
    }

    @media (max-width: 460px) {
      width: 4em;
      height: 4em;
    }
  }
`;
