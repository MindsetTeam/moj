import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import About from "./component/About/index";
import Home from "./component/Home/index";
import Contact from "./component/Contact/index";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
