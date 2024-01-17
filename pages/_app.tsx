import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import "@/styles/fonts.css";
import { GlobalContextProvider } from "@/contexts/GlobalContext";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeWrapper = () => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };

  return (
    mounted && (
      <GlobalContextProvider>
        <ThemeWrapper />
      </GlobalContextProvider>
    )
  );
};

export default App;
