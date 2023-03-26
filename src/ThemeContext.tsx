import { useState, useContext, createContext } from "react";

const ThemeContext = createContext("light");
const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
