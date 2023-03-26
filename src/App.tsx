import React from "react";

import { ThemeProvider } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";

import WindowOne from "./Window1";
import WindowTwo from "./Window2";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggler />
        <WindowOne />
        <WindowTwo />
      </div>
    </ThemeProvider>
  );
}
