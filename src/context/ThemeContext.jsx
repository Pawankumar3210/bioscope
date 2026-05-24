import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    if (isDark) {
      document.body.style.background = "#020408";
      document.body.style.color = "#e2e8f0";
    } else {
      document.body.style.background = "#f5f0e8";  // warm cream
      document.body.style.color = "#2d2a24";        // warm dark brown-black
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);