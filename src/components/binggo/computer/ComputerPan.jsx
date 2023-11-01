import { Input, Col, Row } from "antd";
import { BinggoRate } from "../user/BinggoRate";
import { BinggoComputerListContext } from "../../../contexts/binggo/BinggoContext";
import { useContext } from "react";

export const ComputerPan = (props) => {
  console.log("ComputerPan");
  const { span, gamePanComputer } = props;

  const { binggoComputerList } = useContext(BinggoComputerListContext);

  return (
    <>
      <BinggoRate binggo={binggoComputerList} />
      <Row>
        {gamePanComputer.map((val, index) => (
          <>
            <Col
              span={span}
              key={`admin_${index}`}
              style={
                val.flag
                  ? { backgroundColor: "burlywood" }
                  : { backgroundColor: "black" }
              }
            >
              <div>
                <Input value={val.val} id={`admin_${index}`} disabled />
              </div>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};
