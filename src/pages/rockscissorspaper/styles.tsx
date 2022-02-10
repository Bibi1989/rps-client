import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #1d3354;
  color: white;

  @media (max-width: 660px) {
    padding: 10px;
  }
`;

export const InnerContainer = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f1f1f7;
  color: #555555;
  padding: 40px;
  box-shadow: -2px 0px 18px 2px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -2px 0px 18px 2px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -2px 0px 18px 2px rgba(0, 0, 0, 0.23);

  .tries_text {
    margin: 0;
    margin-bottom: 10px;
  }

  @media (max-width: 660px) {
    padding: 10px;
  }
`;

export const VerticalSpacing = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : "30px")};
`;

export const TotalTries = styled.h4``;
