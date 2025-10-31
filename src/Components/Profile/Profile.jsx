import React from "react";
import "./Profile.css";

// Import icons (You can use your own image icons in /assets if you prefer)
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  SiHackerrank,
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";

const Profile = () => {
  const profiles = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/gulshan-yadav-466976286/",
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/gulshanyadav91",
      color: "#171515",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank />,
      link: "https://www.hackerrank.com/profile/gulshanyadav0029",
      color: "#1BA94C",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      link: "https://auth.geeksforgeeks.org/user/gulshanyar6m1",
      color: "#0F9D58",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/mpec_gulshan/",
      color: "#FFA116",
    },
    {
      name: "Codeolio",
      icon: <SiCodeforces />,
      link: "https://codolio.com/profile/er_gulshanyadav91",
      color: "#E94E77",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=100055541967308",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/er_gulshanyadav/",
      color: "#E1306C",
    },
  ];

  return (
    <div className="profile-section">
      <h1>My Profiles</h1>
      <p>Explore my professional and social platforms below 👇</p>

      <div className="profile-grid">
        {profiles.map((p, index) => (
          <a
            key={index}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
            style={{ "--hover-color": p.color }}
          >
            <div className="profile-icon">{p.icon}</div>
            <h3>{p.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
