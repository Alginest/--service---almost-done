import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useGlobalContext } from "./context";
import MobileNav from "./Mobile/MobileNav";
import AnimatedRoutes from "./hooks/AnimatedRoutes";
import Loading from "./Pages/Loading";
function App() {
  const { dark, loading } = useGlobalContext();

  const theme = createTheme({
    palette: {
      primary: {
        main: dark ? "#fff" : "#222",
      },
      secondary: {
        main: dark ? "#222" : "#fff",
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
      type: dark ? "dark" : "light",
    },
  });
  if (loading) {
    return <Loading type={"bars"} color={"#fff"} />;
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <MobileNav />
        <AnimatedRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
