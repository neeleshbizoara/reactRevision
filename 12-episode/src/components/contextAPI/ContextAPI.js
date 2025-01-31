import React from "react";
import Header from "./Header";
import Main from "./Main";
import { ThemeProvider } from "./ThemeContext";

const ContextAPI = () => {
    return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default ContextAPI;
