import React from "react";
import ReactDOM from "react-dom";
import { ModalContainer, Backdrop, ModalInner } from "./styles";

type ModalProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  toggleVisibility,
}) => {
  const modal: JSX.Element = (
    <ModalContainer>
      <Backdrop onClick={toggleVisibility} />
      <ModalInner>
        {children}
        <span
          className="modal-close"
          aria-label="Close Modal Details"
          onClick={toggleVisibility}
        >
          &times;
        </span>
      </ModalInner>
    </ModalContainer>
  );

  return isVisible ? ReactDOM.createPortal(modal, document.body) : null;
};
