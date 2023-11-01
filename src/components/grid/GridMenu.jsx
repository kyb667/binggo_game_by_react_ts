import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Menu } from "antd";

export const GridMenu = () => {
  const nav = useNavigate();

  const Click = (e) => {
    nav(e.key);
  };
  return (
    <Menu
      onClick={Click}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "/",
          icon: <UserOutlined />,
          label: "Home"
        }
      ]}
    />
  );
};
