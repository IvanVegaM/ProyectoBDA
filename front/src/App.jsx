import { useState } from "react";
import "./css/App.css";
import SideBar from "./components/SideBar";
import React from "react";
import Charts from "./Charts";
import Title from "./components/Title";

function App() {
  return (
    <div className='container'>
      <SideBar />
      <div className='content-container'>
        <Title />
        <Charts />
      </div>
    </div>
  );
}

export default App;
