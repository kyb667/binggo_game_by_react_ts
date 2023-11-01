import { Rate } from "antd";

export const BinggoRate = (props) => {
  const { binggo } = props;

  return (
    <>{binggo.length > 0 ? <Rate value={binggo.length} disabled /> : null}</>
  );
};
