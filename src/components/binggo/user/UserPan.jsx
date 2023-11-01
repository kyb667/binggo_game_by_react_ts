import { Row } from "antd";
import { useContext, useEffect } from "react";
import { BinggoRate } from "./BinggoRate";
import { BinggoInput } from "./BinggoInput";
import { BinggoButton } from "./BinggoButton";
import {
  BinggoListContext,
  BinggoPanReadOnlyFlagContext
} from "../../../contexts/binggo/BinggoContext";

export const UserPan = (props) => {
  console.log("UserPan");
  const { span, allCnt, gamePan, game } = props;

  const { binggoPanReadOnlyFlag } = useContext(BinggoPanReadOnlyFlagContext);

  const { binggoList } = useContext(BinggoListContext);

  return (
    <>
      {!binggoPanReadOnlyFlag ? (
        <div>1から{allCnt}までの数値を入力してください。（重複不可）</div>
      ) : (
        <BinggoRate binggo={binggoList} />
      )}
      <br />
      <Row>
        {gamePan.map((val, index) => (
          <BinggoInput
            val={val}
            index={index}
            key={index}
            span={span}
            game={game}
          />
        ))}
      </Row>
      <br />
      <BinggoButton allCnt={allCnt} />
    </>
  );
};
