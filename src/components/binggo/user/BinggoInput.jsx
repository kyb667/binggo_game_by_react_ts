import { Button, Col } from "antd";
import Input from "antd/es/input/Input";
import { useContext } from "react";
import {
  BinggoGameTurnFlagContext,
  BinggoPanContext,
  BinggoPanReadOnlyFlagContext,
  BinggoGameClickNumContext
} from "../../../contexts/binggo/BinggoContext";

export const BinggoInput = (props) => {
  // console.log("BinggoInput");
  const { val, index, span, game } = props;

  // readonly flag
  const { binggoPanReadOnlyFlag } = useContext(BinggoPanReadOnlyFlagContext);

  const { binggoGameTurnFlag } = useContext(BinggoGameTurnFlagContext);

  // gamepan
  const { gamePan, setGamePan } = useContext(BinggoPanContext);

  const inputCheck = (e) => {
    let v = document.getElementById(`${e.index}`).value;

    let newGamePan = [...gamePan];
    if (v === "") {
      newGamePan[e.index] = { val: v, flag: false };
    } else {
      newGamePan[e.index] = { val: +v, flag: false };
    }
    setGamePan(newGamePan);
  };

  return (
    <>
      <Col
        span={span}
        style={val.flag ? { backgroundColor: "burlywood" } : null}
      >
        <div>
          <Input
            type="number"
            value={val.val}
            id={`${index}`}
            disabled={binggoPanReadOnlyFlag}
            onChange={inputCheck.bind(this, { index })}
          />
        </div>
        <div>
          {binggoPanReadOnlyFlag ? (
            <Button
              type="text"
              disabled={val.flag || binggoGameTurnFlag !== "1"}
              onClick={game.bind(this, { index })}
            >
              click!
            </Button>
          ) : null}
        </div>
      </Col>
    </>
  );
};
