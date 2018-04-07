import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form action="">
        <div className="contact-row">
          <div className="contact-label">Name: </div>
          <input type="text" />
        </div>
        <div className="contact-row">
          <div className="contact-label">Email: </div>
          <input type="email" />
        </div>
        <div className="contact-row">
          <div className="contact-label">Subject: </div>
          <input type="email" />
        </div>
        <div className="contact-row">
          <div className="contact-label">Message: </div>
          <textarea />
        </div>
        <div className="contact-row">
          <button type="submit" className="blue-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
