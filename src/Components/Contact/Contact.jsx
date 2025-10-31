// import React from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
// const Contact = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "9634150c-fee7-49d0-92d1-eb3dd08f8b3b");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       setResult("Error");
//     }
//   };

//   return (
//     <div id="contact" className="contact">
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1> Let's talk</h1>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//             dolore placeat expedita voluptatum molestias laborum maxime. Eius
//             distinctio dolore qui nulla accusantium?
//           </p>
//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail_icon} alt="" />
//               <p>gulshanyadav0029@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//               <img src={call_icon} alt="" />
//               <p>+91 9795960035</p>
//             </div>
//             <div className="contact-detail">
//               <img src={location_icon} alt="" />
//               <p>Kanpur, UttarPradesh</p>
//             </div>
//           </div>
//         </div>
//         <div onSubmit={onSubmit} className="contact-right">
//           <label htmlFor="">Your Name</label>
//           <input type="text" placeholder="Enter your name" name="name" />
//           <label htmlFor="">Your Email</label>
//           <input type="email" placeholder="Enter your email" name="email" />
//           <label htmlFor="">Write your message here</label>
//           <textarea
//             name="message"
//             rows="8"
//             placeholder="Enter your message"
//           ></textarea>
//           <button type="submit" className="contact-submit">
//             Submit Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

//GPT

import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9634150c-fee7-49d0-92d1-eb3dd08f8b3b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully!");
      alert(data.message);
      event.target.reset();
    } else {
      setResult("Error submitting form.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore
            placeat expedita voluptatum molestias laborum maxime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>gulshanyadav0029@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9795960035</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Kanpur, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* ✅ FIX: use form instead of div */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
          <span className="form-result">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
