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
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
  padding: 0px 10px;
`;

export const ScoreDiv = styled.div`
  text-align: center;

  h4 {
    margin-bottom: 10px;

    @media (max-width: 660px) {
      font-size: 12px;
    }
  }

  .icon {
    &.animate {
      animation: ${move} 0.5s linear 2s infinite alternate;
      color: purple;
    }
  }
`;
