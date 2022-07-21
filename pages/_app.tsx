import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../src/layout/MainLayout";
import i18n from "../src/i18n";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    i18n.init();
    const user = localStorage.getItem("user");
    if (user) {
      console.log(JSON.parse(user).locale);
      i18n.changeLanguage(JSON.parse(user).locale);
    }
  }, []);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
