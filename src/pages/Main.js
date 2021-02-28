import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Facts from "./Facts";

export default function Main() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/facts" component={Facts} />
    </Switch>
  );
}
