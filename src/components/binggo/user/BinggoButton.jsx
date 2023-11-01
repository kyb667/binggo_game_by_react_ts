import { Button } from "antd";
import { useContext } from "react";
import {
  BinggoGameTurnFlagContext,
  BinggoPanContext,
  BinggoPanReadOnlyFlagContext
} from "../../../contexts/binggo/BinggoContext";
import { useNavigate } from "react-router-dom";

export const BinggoButton = (props) => {
  // console.log("BinggoButton");
  const { allCnt } = props;

  const nav = useNavigate();

  // gamepan
  const { gamePan } = useContext(BinggoPanContext);

  // readonly flag
  const { binggoPanReadOnlyFlag, setBinggoPanReadOnlyFlag } = useContext(
    BinggoPanReadOnlyFlagContext
  );

  const { setBinggoGameTurnFlag } = useContext(BinggoGameTurnFlagContext);

  const validCheck = () => {
    console.log("BinggoButton validCheck start");

    let inputList = [];
    let valid = true;

    for (let i of gamePan) {
      let v = i.val;

      if (v === "") {
        valid = false;
        break;
      }

      if (!(v >= 0 && v <= allCnt)) {
        valid = false;
        break;
      }

      if (inputList.includes(v)) {
        valid = false;
        break;
      }

      inputList.push(v);
    }

    setBinggoPanReadOnlyFlag(valid);

    setBinggoGameTurnFlag("1");

    if (valid === false) {
      alert("値が正しくないです。");
    } else {
      alert("game 開始!");
    }
  };

  const retry = () => {
    nav("/");
  };
  return (
    <>
      {binggoPanReadOnlyFlag ? (
        <Button type="primary" onClick={retry}>
          go main
        </Button>
      ) : (
        <Button type="primary" onClick={validCheck}>
          game 開始
        </Button>
      )}
    </>
  );
};
