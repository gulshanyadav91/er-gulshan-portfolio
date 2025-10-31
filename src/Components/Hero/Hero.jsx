import React from "react";
import "./Hero.css";
import profile_img from "../../assets/gulshan_grass.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// ✅ Import your resume file (place it in the src/assets folder)
import resumePDF from "../../assets/gulshan_resume.pdf";

function Hero() {
  // Function to handle resume click
  const handleResumeClick = () => {
    // Opens the resume in a new tab
    window.open(resumePDF, "_blank");
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Gulshan Yadav,</span> a passionate engineering student.
      </h1>
      <p>
        I'm a Full Stack Developer with strong expertise in Java and DSA,
        dedicated to building efficient, scalable, and user-friendly digital
        solutions.
      </p>

      <div className="hero_action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>

        {/* ✅ Resume button now clickable */}
        <div className="hero-resume" onClick={handleResumeClick}>
          My Resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
