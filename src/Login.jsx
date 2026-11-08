import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If already logged in, redirect to home
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  // ✅ Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vpttcjitbphgkk-5000.bytexl.net/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse server response
      const data = await response.json();

      if (response.ok) {
        alert("✅ Login successful!");

        // Save login info in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userName", data.user.name);

        setIsLoggedIn(true);

        // Navigate to home
        navigate("/home");
      } else {
        alert(data.message || "❌ Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Server connection failed. Please check your backend.");
    }
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "#f4f4f9",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "30px 25px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
            width: "360px",
            maxWidth: "90%",
          }}
        >
          <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Login</h1>

          {/* ✅ Login Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>

          <p style={{ margin: "12px 0" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#ff4081", textDecoration: "none" }}
            >
              Sign up here
            </Link>
          </p>

          <p>
            <Link
              to="/home"
              style={{ color: "#ff4081", textDecoration: "none" }}
            >
              ⬅ Back to Home
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ Footer */}
      <footer
        style={{
          backgroundColor: "#dcd0b5",
          color: "#000",
          textAlign: "center",
          padding: "12px 10px",
          fontSize: "0.95rem",
          borderRadius: "8px",
          width: "100%",
          flexShrink: 0,
        }}
      >
        &copy; 2025 LMS Platform. All Rights Reserved. | Designed by LMS Team
      </footer>
    </div>
  );
}

const inputStyle = {
  width: "95%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const buttonStyle = {
  width: "95%",
  padding: "12px",
  marginTop: "15px",
  border: "none",
  borderRadius: "5px",
  background: "#dcd0b5",
  color: "#000",
  fontSize: "16px",
  cursor: "pointer",
};

export default Login;
