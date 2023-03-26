import React from "react";
import { useUpdateTheme } from "./ThemeContext";

export default function ThemeToggler() {
  const toggleTheme = useUpdateTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
