import React from "react";
import { useTheme } from "./ThemeContext";

export default function WindowTwo() {
  const theme = useTheme();

  const styles = {
    width: "300px",
    height: "100px",
    background: theme === "light" ? "#aaa" : "#333",
    padding: "40px",
    color: theme === "light" ? "black" : "white",
    marginTop: "10px"
  };

  return <div style={styles}>This is something on window 1</div>;
}
