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
        <Route path={process.env.PUBLIC_URL + "/"} element={<GameMain />} />
        <Route
          path={process.env.PUBLIC_URL + "/binggo"}
          element={<BinggoMain />}
        />
      </Routes>
    </Content>
  );
};
