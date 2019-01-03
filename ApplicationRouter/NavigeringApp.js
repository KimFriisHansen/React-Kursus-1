
import React, { Component } from "react";
import {Route, NavLink, BrowserRouter} from "react-router-dom";
import Hovedside from "./Hovedside";
import Produkter from "./Produkter";
import Kunder from "./Kunder";


class NavigeringApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>React Router Excercise</h1>
          <ul className="header">
            <li><NavLink exact to="/">Hovedside</NavLink> </li>
            <li><NavLink to="/Produkter">Produkter</NavLink></li>
            <li><NavLink to="/Kunder">Kunder</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Hovedside} />
            <Route path="/Produkter" component={Produkter} />
            <Route path="/WhatWhatKunder" component={Kunder} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavigeringApp;
