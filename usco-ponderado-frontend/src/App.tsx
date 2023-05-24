import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { RouterConfig } from "./routers/index.router";
import { theme } from "./theme/index.theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={RouterConfig} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
