import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// Partials
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Loading from "./component/Shared/Loading";

import { NewsProvider } from "./context/newsTypes";
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
const Structure = React.lazy(() => import("./component/About/structure/index"));

// Home Component
const Home = React.lazy(() => import("./component/Home/index"));
const Gallery = React.lazy(() => import("./component/Home/gallery/index"));
// Law Documents Component
const LawDocuments = React.lazy(() => import("./component/LawDocuments/index"));
const SingleLawDocument = React.lazy(() =>
   import("./component/LawDocuments/id/index")
);
// Contact Component
const Contact = React.lazy(() => import("./component/Contact/index"));
// News Component
const News = React.lazy(() => import("./component/News/index.js"));
// Single News Component
const SingleNews = React.lazy(() =>
   import("./component/News/SingleNews/index")
);
// Public Service
const CriminalRecord = React.lazy(() =>
   import("./component/CriminalRecord/index")
);
// Under Construction Component
const UnderConstruction = React.lazy(() =>
   import("./component/UnderConstruction/index")
);

function App() {
   const [newsTypes, setNewsTypes] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         const data = await fetch(
            "http://demo.mcs.gov.kh/moj/wp-json/wp/v2/categories?_fields=id,name,slug&parent=2"
         ).then((res) => res.json());
         setNewsTypes(data);
      };
      fetchData();
   }, []);
   return (
      <div className="App">
         <NewsProvider value={newsTypes}>
            <Router>
               <Header></Header>
               <Suspense fallback={<Loading />}>
                  <Switch>
                     {/* Contact Route */}
                     <Route path="/contact">
                        <Contact />
                     </Route>
                     {/* About Route */}
                     <Route path="/about">
                        <About />
                     </Route>
                     <Route path="/structure">
                        <Structure />
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
                     {/* Document Route */}
                     <Route path="/law-documents/:id">
                        <SingleLawDocument></SingleLawDocument>
                     </Route>
                     <Route path="/law-documents">
                        <LawDocuments></LawDocuments>
                     </Route>
                     {/* Public Service */}
                     <Route path="/criminal-record">
                        <CriminalRecord></CriminalRecord>
                     </Route>
                     {/* Root Route */}
                     <Route path="/meeting">
                        <MeetingEvents />
                     </Route>
                     <Route path="/gallery">
                        <Gallery></Gallery>
                     </Route>
                     <Route path="/news-event/:id">
                        <SingleNews />
                     </Route>
                     <Route path="/news/:types">
                        <News />
                     </Route>
                     <Route exact path="/">
                        <Home />
                     </Route>
                     <Route path="*">
                        <UnderConstruction></UnderConstruction>
                     </Route>
                  </Switch>
               </Suspense>
               <Footer></Footer>
            </Router>
         </NewsProvider>
      </div>
   );
}

export default App;
