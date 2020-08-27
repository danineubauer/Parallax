import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parallax from "./Components/Parallax";
import FirstPage from "./Components/FirstPage";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <Parallax />
    </div>
  );
}

export default App;
