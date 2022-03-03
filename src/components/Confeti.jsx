import React from "react";

import Confetti from "react-confetti";

export default ({ run }) => {
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={run ? 200 : 0}
    />
  );
};
