import { Tab } from "./common/Tab";
import { EndGame } from "./common/EndGame";
import React, { useCallback, useContext, useEffect } from "react";
import {
  BinggoComputerListContext,
  BinggoGameClickNumContext,
  BinggoGameEndContext,
  BinggoGameTurnFlagContext,
  BinggoListContext,
  BinggoPanComputerContext,
  BinggoPanContext,
  BinggoPanReadOnlyFlagContext,
  BinggoPanSizeContext
} from "../../contexts/binggo/BinggoContext";

import {
  FunCntList,
  FunshuffleArray,
  UpdatePanFlag,
  checkBinggoLeft,
  checkBinggoRight,
  checkBinggoX,
  checkBinggoY,
  updateBinggo
} from "./common/BinggoFunc";

import { UserPan } from "./user/UserPan";
import { ComputerPan } from "./computer/ComputerPan";

var ColSpan = {
  3: 8,
  4: 6,
  6: 4
};

export const BinggoGrid = (props) => {
  // 枠サイズ
  const { size } = useContext(BinggoPanSizeContext);

  // user用枠
  const { gamePan, setGamePan } = useContext(BinggoPanContext);

  // computer用枠
  const { gamePanComputer, setGamePanComputer } = useContext(
    BinggoPanComputerContext
  );

  // user側の修正フラグ
  const { setBinggoPanReadOnlyFlag } = useContext(BinggoPanReadOnlyFlagContext);

  // 最後に押したカラムの値
  const { setClickNum } = useContext(BinggoGameClickNumContext);

  // ゲーム状況
  const { binggoGameTurnFlag, setBinggoGameTurnFlag } = useContext(
    BinggoGameTurnFlagContext
  );

  // userのbinggoリスト
  const { binggoList, setBinggoList } = useContext(BinggoListContext);

  // computerのbinggoリスト
  const { binggoComputerList, setBinggoComputerList } = useContext(
    BinggoComputerListContext
  );

  // ゲーム終了フラグ
  const { endGame, setEndGame } = useContext(BinggoGameEndContext);

  // 初期レンダリング
  useEffect(() => {
    setEndGame(false);
    setBinggoList([]);
    setBinggoComputerList([]);
    setBinggoPanReadOnlyFlag(false);
  }, []);

  // 初期レンダリング
  // サイズが変更になった時、呼び出されるレンダリング
  useEffect(() => {
    setGamePan(FunshuffleArray(FunCntList(size ** 2)));
    setGamePanComputer(FunshuffleArray(FunCntList(size ** 2)));
  }, [size]);

  // 初期レンダリング
  // user側のbinggo　もしくは computer川のbinggoが変更された場合
  useEffect(() => {
    if (binggoList.length >= size) {
      setEndGame(true);
      setBinggoGameTurnFlag("5");
    } else {
      if (binggoComputerList.length >= size) {
        setEndGame(true);
        setBinggoGameTurnFlag("6");
      }
    }
  }, [binggoList, binggoComputerList]);

  // ゲーム状況チェック
  useEffect(() => {
    if (binggoGameTurnFlag === "3") {
      // console.log("computer pan 選択 開始");
      gameComputer();
    } else if (binggoGameTurnFlag === "1") {
      // console.log("user 選択 開始");
    }
  }, [binggoGameTurnFlag]);

  // user側のカラムのボタンを押した場合の関数
  const game = (val) => {
    const num = val.index;
    // 相手にお知らせする時、使う
    let clickValue = gamePan[num].val;

    // console.log("user click (id, value) : " + num + " " + clickValue);

    // user側のbinggoチェック
    PanCheck(clickValue, gamePan, setGamePan, binggoList, setBinggoList);

    // computer側のbinggoチェック
    PanCheck(
      clickValue,
      gamePanComputer,
      setGamePanComputer,
      binggoComputerList,
      setBinggoComputerList
    );

    // console.log("BinggoMain game end");

    setClickNum(clickValue);
    setBinggoGameTurnFlag("3");
    // console.log("game end");
  };

  // computer側の関数
  const gameComputer = () => {
    // console.log("gameComputer start");
    let clickId;
    let clickValue;

    // ランダムで ClickIDを決める
    const baseList = FunshuffleArray(FunCntList(size ** 2));

    for (let i in baseList) {
      if (!gamePanComputer[i].flag) {
        clickId = i;
        clickValue = gamePanComputer[i].val;
        break;
      }
    }

    // console.log("computer click number is " + clickId);

    PanCheck(
      clickValue,
      gamePanComputer,
      setGamePanComputer,
      binggoComputerList,
      setBinggoComputerList
    );

    PanCheck(clickValue, gamePan, setGamePan, binggoList, setBinggoList);

    setBinggoGameTurnFlag("1");
    setClickNum(clickValue);
    // console.log("gameComputer end");
  };

  // 共通関数
  const PanCheck = (
    clickNum,
    gamePan,
    setGamePan,
    binggoList,
    setBinggoList
  ) => {
    let clickId;

    for (var i in gamePan) {
      if (gamePan[i].val === clickNum) {
        clickId = i;
        break;
      }
    }

    let clon = UpdatePanFlag(gamePan, clickId);
    setGamePan(clon);

    // console.log("PanCheck (id, value) : " + clickId + " " + clickNum);

    let x = checkBinggoX(clickId, size, gamePan);
    updateBinggo(x.binggoFlag, x.targetList, binggoList, setBinggoList);

    let y = checkBinggoY(clickId, size, gamePan);
    updateBinggo(y.binggoFlag, y.targetList, binggoList, setBinggoList);

    let left = checkBinggoLeft(clickId, size, gamePan);
    updateBinggo(left.binggoFlag, left.targetList, binggoList, setBinggoList);

    let right = checkBinggoRight(clickId, size, gamePan);
    updateBinggo(right.binggoFlag, right.targetList, binggoList, setBinggoList);
  };

  return (
    <>
      {binggoList.length > 0 && binggoGameTurnFlag === "5" ? (
        <EndGame
          endGame={endGame}
          setEndGame={setEndGame}
          flag={binggoList.length >= size ? true : false}
        />
      ) : null}
      {binggoComputerList.length > 0 && binggoGameTurnFlag === "6" ? (
        <EndGame
          endGame={endGame}
          setEndGame={setEndGame}
          flag={binggoComputerList.length >= size ? false : true}
        />
      ) : null}
      {/* {binggoComputerList.map((val) => (
        <div>{val}</div>
      ))} */}

      <Tab
        items={[
          { size },
          {
            label: "computer",
            key: "1",
            children: (
              <>
                <ComputerPan
                  span={ColSpan[size]}
                  allCnt={size ** 2}
                  gamePanComputer={gamePanComputer}
                />
              </>
            )
          }
        ]}
      />

      {/* {binggoList.map((val) => (
        <div>{val}</div>
      ))} */}
      <Tab
        items={[
          { size },
          {
            label: "you",
            key: "1",
            children: (
              <>
                <UserPan
                  span={ColSpan[size]}
                  allCnt={size ** 2}
                  gamePan={gamePan}
                  game={game}
                />
              </>
            )
          }
        ]}
      />
      <></>
    </>
  );
};
