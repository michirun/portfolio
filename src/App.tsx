import React from "react";
import "./App.css";
// import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Activities from "./components/Activities";
import Works from "./components/Works";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <div className="App">
      <Stack spacing={5}>
        {/* <Header /> */}
        <Introduction />
        <Activities />
        <Works />
      </Stack>
    </div>
  );
}

export default App;
