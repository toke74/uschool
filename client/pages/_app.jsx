//package file
import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//local file
// import "../styles/globals.css";
import { theme } from "../styles/Themes";
import GlobalStyles from "../styles/Global";
import Navbar from "../components/navbar/Navbar";
import ToastContainer from "../components/toastContainer/ToastContainer";
import { AppStateProvider } from "../appState/contexts/state";
import { initialState, combineReducers } from "../appState/reducers";
import toastReducer from "../appState/reducers/toastReducer";
import userReducer from "../appState/reducers/userReducer";

const appReducers = combineReducers({
  toast: toastReducer,
  user: userReducer,
});

function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </AppStateProvider>
  );
}

export default MyApp;
