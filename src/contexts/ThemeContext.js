import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    light: "light",
    dark: "dark",
    isLightTheme: true
  });

  const toggleTheme = () => {
    setTheme(prevTheme => ({...prevTheme, isLightTheme: !prevTheme.isLightTheme}))
  }

  const ThemeContextData = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;