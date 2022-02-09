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

export const ModalContainer = styled.button<ButtonT>`
  border: none;
  padding: 10px 30px;
  background: ${({ background }) => background ?? background};
  color: ${({ color }) => color ?? color};
  border-radius: 4px;
  cursor: pointer;
`;

export const Backdrop = styled.button<ButtonT>`
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const ModalInner = styled.button<ButtonT>`
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  max-width: 500px;
  height: 500px;
  min-width: 200px;
  width: 100%;
  padding: 30px;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;

  .modal-close {
    color: gray;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1rem;
    padding: 0;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
