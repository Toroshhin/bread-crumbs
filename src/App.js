import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import Computers from "./components/Computers";
import Telephones from "./components/Telephones";
import Consoles from "./components/Consoles";
import Breadcrumbs from "./components/Breadcrumbs";


export default function App() {
  return (
    <>
      <Breadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/products" render={props => <Products {...props} />} />
        <Route exact path="/products/computers" render={props => <Computers {...props} />} />
        <Route exact path="/products/telephones" render={props => <Telephones {...props} />} />
        <Route exact path="/products/consoles" render={props => <Consoles {...props} />} />
      </Switch>
    </>
  );
}
