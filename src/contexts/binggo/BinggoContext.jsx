import React, { createContext, useState } from "react";

export const BinggoPanSizeContext = createContext();

export const BinggoSizeProvider = ({ children }) => {
  const [size, setSize] = useState(4);

  return (
    <BinggoPanSizeContext.Provider
      value={{
        size,
        setSize
      }}
    >
      {children}
    </BinggoPanSizeContext.Provider>
  );
};

export const BinggoPanContext = createContext();

export const BinggoPanProvider = ({ children }) => {
  const [gamePan, setGamePan] = useState([]);

  return (
    <BinggoPanContext.Provider
      value={{
        gamePan,
        setGamePan
      }}
    >
      {children}
    </BinggoPanContext.Provider>
  );
};

export const BinggoPanReadOnlyFlagContext = createContext();

export const BinggoPanReadOnlyFlagProvider = ({ children }) => {
  const [binggoPanReadOnlyFlag, setBinggoPanReadOnlyFlag] = useState(false);

  return (
    <BinggoPanReadOnlyFlagContext.Provider
      value={{
        binggoPanReadOnlyFlag,
        setBinggoPanReadOnlyFlag
      }}
    >
      {children}
    </BinggoPanReadOnlyFlagContext.Provider>
  );
};

export const BinggoPanComputerContext = createContext();

export const BinggoPanComputerProvider = ({ children }) => {
  const [gamePanComputer, setGamePanComputer] = useState([]);

  return (
    <BinggoPanComputerContext.Provider
      value={{
        gamePanComputer,
        setGamePanComputer
      }}
    >
      {children}
    </BinggoPanComputerContext.Provider>
  );
};

export const BinggoGameTurnFlagContext = createContext();

export const BinggoGameTurnFlagProvider = ({ children }) => {
  const [binggoGameTurnFlag, setBinggoGameTurnFlag] = useState("0");

  return (
    <BinggoGameTurnFlagContext.Provider
      value={{
        binggoGameTurnFlag,
        setBinggoGameTurnFlag
      }}
    >
      {children}
    </BinggoGameTurnFlagContext.Provider>
  );
};

export const BinggoGameClickNumContext = createContext();

export const BinggoGameClickNumProvider = ({ children }) => {
  const [clickNum, setClickNum] = useState();

  return (
    <BinggoGameClickNumContext.Provider
      value={{
        clickNum,
        setClickNum
      }}
    >
      {children}
    </BinggoGameClickNumContext.Provider>
  );
};

export const BinggoGameEndContext = createContext();

export const BinggoGameEndProvider = ({ children }) => {
  const [endGame, setEndGame] = useState(false);

  return (
    <BinggoGameEndContext.Provider
      value={{
        endGame,
        setEndGame
      }}
    >
      {children}
    </BinggoGameEndContext.Provider>
  );
};

export const BinggoListContext = createContext();

export const BinggoListProvider = ({ children }) => {
  const [binggoList, setBinggoList] = useState([]);

  return (
    <BinggoListContext.Provider
      value={{
        binggoList,
        setBinggoList
      }}
    >
      {children}
    </BinggoListContext.Provider>
  );
};

export const BinggoComputerListContext = createContext();

export const BinggoComputerListProvider = ({ children }) => {
  const [binggoComputerList, setBinggoComputerList] = useState([]);

  return (
    <BinggoComputerListContext.Provider
      value={{
        binggoComputerList,
        setBinggoComputerList
      }}
    >
      {children}
    </BinggoComputerListContext.Provider>
  );
};
