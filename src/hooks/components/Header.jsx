import React from "react";

const Header = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        background: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome, YJ!</h1>
    </header>
  );
};

export default Header;
