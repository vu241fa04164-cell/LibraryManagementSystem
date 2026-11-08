import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 🔗 Your backend API link
  const API_URL = "https://tfctczitrnprtie-5000.bytexl.net/feedback"; // change if needed

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = { name, email, rating, message };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setRating("");
        setMessage("");
      } else {
        alert("Error: Feedback not submitted.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server not reachable!");
    }

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f8f9fa, #dee2e6)",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          padding: "30px",
          borderRadius: "12px",
          background: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#222",
            fontSize: "26px",
          }}
        >
          💬 We Value Your Feedback
        </h2>

        {submitted && (
          <div
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "12px",
              borderRadius: "6px",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            ✅ Thank you for your feedback!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}
            >
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "15px",
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}
            >
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "15px",
              }}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}
            >
              Rating
            </label>
            <select
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "15px",
              }}
            >
              <option value="">Select rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Poor</option>
            </select>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{ display: "block", fontWeight: "600", marginBottom: "6px" }}
            >
              Message
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts..."
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "15px",
                resize: "none",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
