import { Tabs } from "antd";

export const Tab = (props) => {
  // console.log("Tab");
  const { items } = props;

  const size = items[0];
  const item = items[1];

  return (
    <Tabs
      defaultActiveKey="1"
      size={size.size}
      style={{ marginBottom: 32 }}
      items={[item]}
    />
  );
};
