import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme}`}>
      <p>This is the {theme} theme.</p>
    </main>
  );
};

export default Main;
