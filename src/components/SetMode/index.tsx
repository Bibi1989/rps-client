import React from "react";

import { Col, Container, Row } from "./styles";
import { ModeT } from "constant/types/types";

type Props = {
  setMode: (mode: ModeT) => void;
  mode: ModeT | string;
  reset: () => void;
};

const SetMode: React.FC<Props> = ({ setMode, mode, reset }) => {
  return (
    <Container>
      <h4>Select Game Mode</h4>
      <Row>
        <Col
          active={mode === "user"}
          onClick={() => {
            setMode("user");
            reset();
          }}
        >
          Player vs Computer
        </Col>
        <Col
          active={mode === "computer"}
          onClick={() => {
            setMode("computer");
            reset();
          }}
        >
          Computer vs Computer
        </Col>
      </Row>
    </Container>
  );
};

export default SetMode;
