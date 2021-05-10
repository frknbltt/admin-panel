import React, { useState } from "react";

export const ThemeContext = React.createContext({});

const ThemeProvider = (props) => {
  const [color, setColor] = useState("white");
  const [sideColor, setSideColor] = useState("#001529");

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
        sideColor,
        setSideColor,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
