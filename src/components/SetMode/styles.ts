import styled from "styled-components";

export const Container = styled.div`
  h4 {
    text-align: center;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Col = styled.div<{ active?: boolean }>`
  font-size: 10px;
  padding: 5px 15px;
  background: ${({ active }) => (active ? "dodgerblue" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#444444")};
  cursor: pointer;

  :nth-child(1) {
    margin-right: 1px;
  }
`;
