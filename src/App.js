import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Facts from "./pages/Facts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/facts">
          <Facts />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

//routing how-to:
//https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-reacts
