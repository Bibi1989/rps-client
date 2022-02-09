import React, { CSSProperties } from "react";

import { Button } from "./styles";

type Props = {
  background?: string;
  color?: string;
  style?: CSSProperties;
  onClick: () => void;
};

const CustomButton: React.FC<Props> = ({
  children,
  background = "dodgerblue",
  color = "white",
  onClick,
  style,
}) => {
  return (
    <Button background={background} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
