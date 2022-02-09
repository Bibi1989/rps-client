import React from "react";

type Props = {
  answer: string;
};

const DisplayWin: React.FC<Props> = ({ answer }) => {
  return (
    <div>
      <h1>{answer}</h1>
    </div>
  );
};

export default DisplayWin;
