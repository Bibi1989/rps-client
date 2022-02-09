import React from "react";

import CustomButton from "components/commons/CustomButton";

type Props = {
  onClick: () => void;
};

const RestartGame: React.FC<Props> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default RestartGame;
