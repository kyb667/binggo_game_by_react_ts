import { BrowserRouter } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Layout, theme } from "antd";

import { GridHeader } from "./grid/GridHeader";
import { GridMenu } from "./grid/GridMenu";
import { GridMain } from "./grid/GridMain";

import { stateCollapsed } from "../store/UseState";

import { AppContext } from "../contexts/AppContext";

import {
  BinggoSizeProvider,
  BinggoPanProvider,
  BinggoPanReadOnlyFlagProvider,
  BinggoPanComputerProvider,
  BinggoGameTurnFlagProvider,
  BinggoGameClickNumProvider,
  BinggoGameEndProvider,
  BinggoListProvider,
  BinggoComputerListProvider,
} from "../contexts/binggo/BinggoContext";

const { Sider } = Layout;

export const Main = () => {
  const [collapsed, setCollapsed] = useRecoilState(stateCollapsed);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AppContext
      contexts={[
        BinggoSizeProvider,
        BinggoPanProvider,
        BinggoPanReadOnlyFlagProvider,
        BinggoPanComputerProvider,
        BinggoGameTurnFlagProvider,
        BinggoGameClickNumProvider,
        BinggoGameEndProvider,
        BinggoListProvider,
        BinggoComputerListProvider,
      ]}
    >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <GridMenu />
          </Sider>
          <Layout>
            <GridHeader
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              colorBgContainer={colorBgContainer}
            />
            <GridMain colorBgContainer={colorBgContainer} />
          </Layout>
        </Layout>
      </BrowserRouter>
    </AppContext>
  );
};
