import React, { Suspense } from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// Partials
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Loading from "./component/Shared/Loading";
// About Component
const About = React.lazy(() => import("./component/About/index"));
const WelcomeMessage = React.lazy(() =>
  import("./component/About/welcomeMessage")
);
const MinistryBiography = React.lazy(() =>
  import("./component/About/ministryBiography")
);
const PreviousMinisters = React.lazy(() =>
  import("./component/About/previousMinisters")
);
const MeetingEvents = React.lazy(() => import("./component/Meetings/index"));

// Home Component
const Home = React.lazy(() => import("./component/Home/index"));

// Contact Component
const Contact = React.lazy(() => import("./component/Contact/index"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Suspense fallback={<Loading />}>
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
            <Route path="/meeting">
              <MeetingEvents />
            </Route>

            {/* Root Route */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
