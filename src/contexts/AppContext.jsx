import React from "react";

export const AppContext = ({ contexts, children }) => {
  return contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );
};
