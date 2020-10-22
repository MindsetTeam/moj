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
  import("./component/About/welcome-message/index")
);
const MinistryBiography = React.lazy(() =>
  import("./component/About/ministry-biography/index")
);
const PreviousMinisters = React.lazy(() =>
  import("./component/About/previous-minister/index")
);
const MeetingEvents = React.lazy(() => import("./component/Meetings/index"));

// Home Component
const Home = React.lazy(() => import("./component/Home/index"));
const Gallery = React.lazy(() => import("./component/Home/gallery/index"));

// Contact Component
const Contact = React.lazy(() => import("./component/Contact/index"));
// News Component
const News = React.lazy(() => import("./component/News/index.js"));
// Single News Component
const SingleNews = React.lazy(() =>
  import("./component/News/SingleNews/index")
);
const Structure = React.lazy(() =>
  import("./component/About/structure/index")
);

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

            {/* Root Route */}
            <Route path="/meeting">
              <MeetingEvents />
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/structure">
              <Structure/>
            </Route>
            <Route path="/news-event/:id">
              <SingleNews />
            </Route>
            <Route path="/news/:types">
              <News />
            </Route>
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
