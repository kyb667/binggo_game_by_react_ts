import { Card, Col, Row, Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BinggoPanSizeContext } from "../contexts/binggo/BinggoContext";

export const GameMain = () => {
  const nav = useNavigate();

  const { size, setSize } = useContext(BinggoPanSizeContext);

  const SendPage = (url, type) => {
    setSize(type);

    nav(url, {
      state: {
        type: type,
      },
    });
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="binggo game">
            <Button onClick={SendPage.bind(this, `/binggo`, 3)}>3X3</Button>
            <Button onClick={SendPage.bind(this, `/binggo`, 4)}>4X4</Button>
            <Button onClick={SendPage.bind(this, `/binggo`, 6)}>6X6</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="準備中...">ゲーム準備中</Card>
        </Col>
        <Col span={8}>
          <Card title="準備中...">ゲーム準備中</Card>
        </Col>
        <Col span={8}>
          <Card title="準備中...">ゲーム準備中</Card>
        </Col>
        <Col span={8}>
          <Card title="準備中...">ゲーム準備中</Card>
        </Col>
        <Col span={8}>
          <Card title="準備中...">ゲーム準備中</Card>
        </Col>
      </Row>
    </>
  );
};
