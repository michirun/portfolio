import React from "react";
import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Stack from "@mui/material/Stack";

function App() {
  return (
    <div className="App">
      <Stack spacing={10}>
        <Header />
        <Introduction />
      </Stack>
    </div>
  );
}

export default App;
