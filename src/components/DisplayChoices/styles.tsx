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
  display: flex;
  justify-content: space-between;
  max-width: 600;
  width: 100%;
  padding: 10px 20px;
`;

export const Action = styled.div`
  cursor: pointer;
  text-align: center;

  &.animate {
    animation: ${move} 0.5s linear 2s infinite alternate;
    color: purple;
  }
`;
