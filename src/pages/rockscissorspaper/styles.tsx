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
  background: violet;
  color: white;
`;

export const InnerContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f1f1f7;
  color: #555555;
  padding: 40px;
`;

export const VerticalSpacing = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}px` : "30px")};
`;

export const TotalTries = styled.h4``;
