import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
