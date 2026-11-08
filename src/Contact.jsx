import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#f8f8f8",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Contact Us</h1>
        <p>
          Have questions or need support? Reach out to the respective departments
          handling different categories of books in our LMS.
        </p>

        <h2>⏰ Working Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>

        <h2>📚 Trending Books</h2>
        <p>Email: trending@lms.com | Phone: +91 9000000001</p>

        <h2>📖 Classic Books</h2>
        <p>Email: classics@lms.com | Phone: +91 9000000002</p>

        <h2>📘 UPSC Books</h2>
        <p>Email: upsc@lms.com | Phone: +91 9000000003</p>

        <h2>📗 General Knowledge</h2>
        <p>Email: gk@lms.com | Phone: +91 9000000004</p>

        <h2>📕 Text Books</h2>
        <p>Email: textbooks@lms.com | Phone: +91 9000000005</p>

        <h2>📙 Story Books</h2>
        <p>Email: stories@lms.com | Phone: +91 9000000006</p>

        <h2>📜 Ancient Books</h2>
        <p>Email: ancient@lms.com | Phone: +91 9000000007</p>

        <h2>🏛️ Public Books</h2>
        <p>Email: public@lms.com | Phone: +91 9000000008</p>

        <h2>✍️ Literature</h2>
        <p>Email: literature@lms.com | Phone: +91 9000000009</p>

        <h2>🏫 Library Resources</h2>
        <p>Email: library@lms.com | Phone: +91 9000000010</p>

        <h2>📝 Research Papers</h2>
        <p>Email: research@lms.com | Phone: +91 9000000011</p>

        <p style={{ marginTop: "20px" }}>
          For general inquiries, you can also email us at{" "}
          <strong>support@lms.com</strong> or call <strong>+91 9876543210</strong>.
        </p>

        <h2>📍 Office Address</h2>
        <p>
          LMS Headquarters, 2nd Floor, Knowledge Tower, <br />
          Hyderabad, Telangana, India - 500001
        </p>

        <h2>🌐 Follow Us</h2>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> |{" "}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> |{" "}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> |{" "}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>

        <Link to="/home" style={{ display: "inline-block", marginTop: "20px" }}>
          ⬅ Back to Home
        </Link>
      </div>
      <footer
  style={{
    backgroundColor: "#dcd0b5", // updated beige/tan color
    color: "#000",              // black text for contrast
    textAlign: "center",
    padding: "15px 10px",
    marginTop: "40px",
    fontSize: "0.9rem",
    borderRadius: "8px",
  }}
>
  &copy; 2025 LMS Platform. All Rights Reserved. | Designed and Maintained by LMS Team
</footer>
    </div>
  );
}

export default Contact;