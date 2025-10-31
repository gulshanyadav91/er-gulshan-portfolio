import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/gulshan_long.jpg";
export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and results-driven developer with a deep
              interest in creating impactful digital experiences. With hands-on
              experience in full-stack web development and a growing expertise
              in Data Structures and Algorithms using Java, I enjoy solving
              real-world problems through code. I believe in continuous learning
              and strive to combine creativity with logic to build applications
              that are efficient, user-friendly, and meaningful.
            </p>
            <p>
              As a self-motivated and detail-oriented developer, I’m passionate
              about turning ideas into interactive and functional web
              applications.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js , JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js, Express Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java, C, Python(basic)</p> <hr style={{ width: "54%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo Db</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p> Runner up in Tech exam</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p> PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Full Stack Project</p>
        </div>
      </div>
    </div>
  );
}
