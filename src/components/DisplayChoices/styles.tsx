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
  max-width: 600px;
  width: 100%;
  padding: 10px 20px;
  
  @media(max-width: 460px) {
    /* grid-template-columns: repeat(1, 1fr); */
  }
`;

export const Action = styled.div`
  cursor: pointer;
  text-align: center;

  &.animate {
    animation: ${move} 0.5s linear 2s infinite alternate;
    color: purple;
  }
`;
