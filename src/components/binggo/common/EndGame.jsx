import React, { useContext, useRef } from "react";
import { Button, Tour } from "antd";

export const EndGame = (props) => {
  const { endGame, setEndGame, flag } = props;

  const msg = flag ? "user win!" : "computer win!";

  const steps = [
    {
      title: "game end",
      description: msg,
      target: null
    }
  ];

  return (
    <>
      <Tour open={endGame} onClose={() => setEndGame(false)} steps={steps} />
    </>
  );
};
