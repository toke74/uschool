import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Themes";
import GlobalStyles from "../styles/Global";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
