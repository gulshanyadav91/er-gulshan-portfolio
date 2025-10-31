import React from "react";
import "./MoreProjects.css";
import img1 from "../../assets/Screenshot (48).png";
import img2 from "../../assets/Screenshot (49).png";
import img3 from "../../assets/Screenshot (50).png";
import img4 from "../../assets/Screenshot (51).png";
import img5 from "../../assets/Screenshot (52).png";
import img6 from "../../assets/Screenshot (53).png";

const MoreProjects = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="more-projects">
      <h1>More of My Work</h1>
      <p>Explore some of my additional projects and creative works below 👇</p>

      <div className="projects-gallery">
        {images.map((img, index) => (
          <div className="project-card" key={index}>
            <img src={img} alt={`project-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
