import { Routes, Route, Link, Outlet} from "react-router-dom";

import Home from "pages/Home/Home";
import "./styles/main.scss";

import Layout from "components/Layout/Layout";

function App() {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="*" element={<Home />}/>
              </Route>
            </Routes>
    </div>
  );
}

export default App;
