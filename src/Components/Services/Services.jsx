import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

export default function Services() {
  const handleReadMore = (serviceName) => {
    if (serviceName.toLowerCase().includes("wanderlust")) {
      // Open your live Wanderlust website
      window.open("https://traveling-sky-1.onrender.com/listings", "_blank");
    } else {
      // Open "Coming Soon..." page for others
      const newWindow = window.open("", "_blank");
      newWindow.document.write(`
        <html>
          <head>
            <title>Coming Soon...</title>
            <style>
              body {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background: #0f172a;
                color: white;
                font-family: 'Poppins', sans-serif;
                flex-direction: column;
                text-align: center;
              }
              h1 {
                font-size: 3rem;
                margin-bottom: 10px;
              }
              p {
                font-size: 1.2rem;
                color: #94a3b8;
              }
            </style>
          </head>
          <body>
            <h1>🚧 Coming Soon...</h1>
            <p>This page is under development. Stay tuned!</p>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div
                className="services-readmore"
                onClick={() => handleReadMore(services.s_name)}
              >
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
