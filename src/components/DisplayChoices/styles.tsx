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
  place-items: center;
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 10px 20px;

  @media (max-width: 460px) {
    padding: 10px 0px;
  }
`;

export const Action = styled.div<{ color?: string }>`
  cursor: pointer;
  text-align: center;
  border: 3px dashed ${({ color }) => (color ? color : "#555555")};
  border-radius: 50px;
  width: 6em;
  height: 6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  i {
    font-size: 3.5em;
    color: ${({ color }) => (color ? color : "#555555")};
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 460px) {
    width: 4em;
    height: 4em;

    i {
      font-size: 2em;
    }

    p {
      font-size: 10px;
    }
  }

  &.animate {
    animation: ${move} 0.5s linear 2s infinite alternate;
    color: purple;
  }
`;
