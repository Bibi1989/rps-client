import React from "react";

import { Col, Container, Row } from "./styles";
import { ModeT } from "constant/types/types";

type Props = {
  setMode: (mode: ModeT) => void;
  mode: ModeT;
};

const SetMode: React.FC<Props> = ({ setMode, mode }) => {
  return (
    <Container>
      <Row>
        <Col active={mode === "user"} onClick={() => setMode("user")}>
          Player vs Computer
        </Col>
        <Col active={mode === "computer"} onClick={() => setMode("computer")}>
          Computer vs Computer
        </Col>
      </Row>
    </Container>
  );
};

export default SetMode;
