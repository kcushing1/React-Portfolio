import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Facts from "./pages/Facts";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/facts">
            <Facts />
          </Route>
          <Route>
            <Home path="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

//routing how-to:
//https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-reacts
