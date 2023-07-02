import { Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import News from "pages/News/News";
import Participants from "pages/Participants/Participants";
import Layout from "components/Layout/Layout";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";
import Contact from "pages/Contact/Contact";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
