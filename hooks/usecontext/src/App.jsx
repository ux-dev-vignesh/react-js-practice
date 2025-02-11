import React from "react";
import Component1 from "./components/Component1";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const App = () => {

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  }


  return (
    <ThemeContext.Provider value={{ theme, }}>
      <button onClick={changeTheme}>Change Theme</button>
      <Component1 />
    </ThemeContext.Provider>
  );
}

export default App;
