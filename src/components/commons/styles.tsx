import styled from "styled-components";

type ButtonT = {
  background?: string;
  color?: string;
};

export const Button = styled.button<ButtonT>`
  border: none;
  padding: 10px 30px;
  background: ${({ background }) => background ?? background};
  color: ${({ color }) => color ?? color};
  border-radius: 4px;
  cursor: pointer;
`;
