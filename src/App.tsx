import React from "react";
import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Activities from "./components/Activities";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
        {/* <Header /> */}
        <Introduction />
        <Activities />
      </Stack>
    </div>
  );
}

export default App;
