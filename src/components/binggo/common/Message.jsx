import { message } from "antd";
import React, { useMemo } from "react";

export const Message = (props) => {
  // console.log("Message");
  const { target } = props;

  const [messageApi, contextHolder] = message.useMessage();

  useMemo(() => {
    console.log("111");
    messageApi.open({
      type: "success",
      content: `your's binggo!! (${target.length})`
    });
  }, [target]);

  return <>{contextHolder}</>;
};
