// //GPT

// import React from "react";
// import "./MyWork.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";

// const MyWork = () => {
//   const handleShowMore = () => {
//     const newWindow = window.open("", "_blank");
//     newWindow.document.write(`
//       <html>
//         <head>
//           <title>Coming Soon...</title>
//           <style>
//             body {
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               height: 100vh;
//               background: #0f172a;
//               color: white;
//               font-family: 'Poppins', sans-serif;
//               flex-direction: column;
//               text-align: center;
//             }
//             h1 {
//               font-size: 3rem;
//               margin-bottom: 10px;
//             }
//             p {
//               font-size: 1.2rem;
//               color: #94a3b8;
//             }
//           </style>
//         </head>
//         <body>
//           <h1>🚧 Coming Soon...</h1>
//           <p>More projects will be added here soon. Stay tuned!</p>
//         </body>
//       </html>
//     `);
//     newWindow.document.close();
//   };

//   return (
//     <div id="work" className="mywork">
//       <div className="mywork-title">
//         <h1>My latest work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>

//       <div className="mywork-container">
//         {mywork_data.map((work, index) => {
//           return <img key={index} src={work.w_img} alt="" />;
//         })}
//       </div>

//       <div className="mywork-showmore" onClick={handleShowMore}>
//         <p>Show More</p>
//         <img src={arrow_icon} alt="" />
//       </div>
//     </div>
//   );
// };

// export default MyWork;

//gpt
import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

const MyWork = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/more-projects");
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} alt="" />
        ))}
      </div>

      <div className="mywork-showmore" onClick={handleShowMore}>
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow" />
      </div>
    </div>
  );
};

export default MyWork;
