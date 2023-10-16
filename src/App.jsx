// importing components
import Header from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

// importing pages
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/home_section";
import Team_Member from "./components/TeamMembers/Team";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Team" element={<Team_Member />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
