import React, { useCallback, useEffect, useState } from "react";

import { Container, InnerContainer } from "./styles";

export type ChoiceT = {
  id: number;
  icon: any;
  title: string;
  isPress?: boolean;
};

const RockScissorsPaper = () => {
  return (
    <Container>
      <InnerContainer>
        <h2>ROCK SCISSORS PAPER</h2>
      </InnerContainer>
    </Container>
  );
};

export default RockScissorsPaper;
