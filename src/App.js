import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/screens/Home";
import About from "./component/screens/About";
import Project from "./component/screens/Project";
import Contact from "./component/screens/Contact";
import Skills from "./component/screens/Skills";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
