import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import { GameMain } from "../GameMain";
import { BinggoMain } from "../binggo/BinggoMain";

const { Content } = Layout;

export const GridMain = (props) => {
  const { colorBgContainer } = props;

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
      }}
    >
      <Routes>
        <Route path={"/"} element={<GameMain />} />
        <Route path={"/binggo"} element={<BinggoMain />} />
      </Routes>
    </Content>
  );
};
