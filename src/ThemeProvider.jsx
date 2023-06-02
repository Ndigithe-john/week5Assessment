import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
export function ThemeProvider(props) {
  const [dark, setDark] = useState(false);
  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
