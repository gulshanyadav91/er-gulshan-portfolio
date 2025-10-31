// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import Services from "./Components/Services/Services";
// import MyWork from "./Components/MyWork/MyWork";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
// import MoreProjects from "./Components/MoreProjects/MoreProjects";
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <MyWork />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;

//gpt

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import MoreProjects from "./Components/MoreProjects/MoreProjects";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <MyWork />
              <Profile />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* More Projects Page */}
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
