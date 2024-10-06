import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import WhatWeDo from "./pages/AboutPages/WhatWeDo";
import WhoWeAre from "./pages/AboutPages/WhoWeAre";
function App() {
  return (
    <>
      {/* NOTE: h-full w-full */}
      <div
        className="h-full w-full 
      "
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route index element={<WhoWeAre />} />
              <Route path="/about/whatwedo" element={<WhatWeDo />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blog />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
