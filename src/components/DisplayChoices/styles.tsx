import styled, { keyframes } from "styled-components";

const move = keyframes`
  0%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(10px);
  }
`;

export const ActionsBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 10px 20px;
`;

export const Action = styled.div`
  cursor: pointer;
  text-align: center;

  i {
    font-size: 3.5em;
    /* color: #5482b1; */

    @media (max-width: 460px) {
      font-size: 2.5em;
    }
  }

  &.animate {
    animation: ${move} 0.5s linear 2s infinite alternate;
    color: purple;
  }
`;
