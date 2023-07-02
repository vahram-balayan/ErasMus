import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";

import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import News from "pages/News/News";
import Participants from "pages/Participants/Participants";
import Layout from "components/Layout/Layout";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";
import Contact from "pages/Contact/Contact";

import { PAGES } from "constants";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGES.HOME.href} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PAGES.PROJECTS.href} element={<Projects />} />
          <Route path={PAGES.NEWS.href} element={<News />} />
          <Route path={PAGES.PARTICIPANTS.href} element={<Participants />} />
          <Route path={PAGES.ABOUT.href} element={<About />} />
          <Route path={PAGES.CONTACT.href} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
