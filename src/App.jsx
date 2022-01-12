import React from "react";
import "./App.css";
import BackGround from "./components/BackGround/BackGround";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="app">
      <BackGround />
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

export default App;
