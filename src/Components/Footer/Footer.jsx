// import React from "react";
// import footer_logo from "../../assets/footer_logo.svg";
// import user_icon from "../../assets/user_icon.svg";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-top">
//         <div className="footer-top-left">
//           <img src={footer_logo} alt="" />
//           <p>
//             Designed & Developed by Gulshan Yadav — Full Stack Developer.Built
//             with love, logic, and a little bit of late-night debugging.
//           </p>
//         </div>
//         <div className="footer-top-right">
//           <div className="footer-email-input">
//             <img src={user_icon} alt="" />
//             <input type="email" placeholder="Enter your email" />
//           </div>
//           <div className="footer-subscribe">Subscribe</div>
//         </div>
//       </div>
//       <hr />
//       <div className="footer-bottom">
//         <p className="footer-bottom-left">
//           © 2025 Gulshan Yadav. All Rights Reserved.
//         </p>
//         <div className="footer-bottom-right">
//           <p>Term of Services</p>
//           <p>Privacy Policy</p>
//           <p>Connect with me</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

//gpt

import React, { useState } from "react";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    // Simulate success message
    setMessage("✅ Thank you for subscribing!");
    setEmail("");

    // Hide message after few seconds
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="footer logo" />
          <p>
            Designed & Developed by <strong>Gulshan Yadav</strong> — Full Stack
            Developer. Built with passion, precision, and a bit of late-night
            debugging.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>

          {message && <p className="footer-message">{message}</p>}
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Gulshan Yadav. All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
