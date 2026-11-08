import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [country, setCountry] = useState("India");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ❗ Stop auto redirect by clearing previous login data
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userProfile");
  }, []);

  const countryCodes = {
    India: "+91 ",
    "United States": "+1 ",
    "United Kingdom": "+44 ",
    Canada: "+1 ",
    Australia: "+61 ",
    Other: "+",
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setPhone(countryCodes[selectedCountry]);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith(countryCodes[country])) return;
    const numberPart = value.replace(countryCodes[country], "");
    if (/^\d*$/.test(numberPart)) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 8) {
      setError("Please enter a valid phone number");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Prepare data to send
    const userData = { name, email, password, phone, country };

    try {
      const response = await fetch("https://vpttcjitbphgkk-5000.bytexl.net/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed. Please try again.");
        return;
      }

      alert("Registration successful!");

      // ❗ Do NOT login automatically  
      // Do NOT store login data here

      navigate("/login"); // redirect to login page

    } catch (err) {
      setError("Network error. Please try again later.");
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
          <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Sign Up</h1>

          {error && (
            <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={inputStyle}
            />

            {/* COUNTRY + PHONE IN SAME ROW */}
            <div style={{ display: "flex", gap: "10px", width: "95%", margin: "10px auto" }}>
              <select
                value={country}
                onChange={handleCountryChange}
                required
                style={{ ...inputStyle, width: "40%" }}
              >
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Other</option>
              </select>

              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                required
                style={{ ...inputStyle, width: "60%" }}
              />
            </div>

            <button type="submit" style={buttonStyle}>Sign Up</button>
          </form>

          <p style={{ margin: "12px 0" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#ff4081", textDecoration: "none" }}>
              Login here
            </Link>
          </p>

          <p>
            <Link to="/home" style={{ color: "#ff4081", textDecoration: "none" }}>
              ⬅ Back to Home
            </Link>
          </p>
        </div>
      </div>
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

export default Register;
