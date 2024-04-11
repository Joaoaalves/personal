import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);