import React from "react";

import CustomButton from "components/commons/CustomButton";

type Props = {
  onClick: () => void;
};

const StartGame: React.FC<Props> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default StartGame;
