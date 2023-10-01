import { useState } from "react";
import { Stack, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Top from "./Components/Top";
import Design from "./Components/Design";
import State from "./Components/State";
import Middle from "./Components/Middle";
import Footer from "./Components/Footer";

function App() {
  
  const theme = createTheme({
    typography:{
      fontFamily: `'Poppins', sans-serif`,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
        custom: 801,
        custom2: 1000
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
       <Stack spacing={6}>
      <Top />
      <Design />
      <State />
      <Middle />
      <Footer/>
    </Stack>
   </ThemeProvider>
  );
}

export default App;
