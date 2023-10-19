import React from "react";

const Content = ({ isDark }) => {
  return (
    <div
      className="content"
      style={{
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>Have a good one!</p>
    </div>
  );
};

export default Content;
