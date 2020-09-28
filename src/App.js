import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// Partials
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// About Component
import About from "./component/About/index";
import WelcomeMessage from "./component/About/welcomeMessage";
import MinistryBiography from "./component/About/ministryBiography";
import PreviousMinisters from "./component/About/previousMinisters";
// Home Component
import Home from "./component/Home/index";
// Contact Component
import Contact from "./component/Contact/index";

function App() {
   return (
      <div className="App">
         <Router>
            <Header></Header>
            <Switch>
               <Route path="/contact">
                  <Contact />
               </Route>
               {/* About Route */}
               <Route path="/about">
                  <About />
               </Route>
               <Route path="/welcome-message">
                  <WelcomeMessage></WelcomeMessage>
               </Route>
               <Route path="/ministry-biography">
                  <MinistryBiography></MinistryBiography>
               </Route>
               <Route path="/previous-ministers">
                  <PreviousMinisters></PreviousMinisters>
               </Route>

               {/* Root Route */}
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
