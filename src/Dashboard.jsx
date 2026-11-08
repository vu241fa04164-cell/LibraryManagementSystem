import React, { useState, useEffect } from "react";

function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dob: "",
    gender: "Female",
    country: "India",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userProfile"));
    if (stored) setUser(stored);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("✅ Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div style={pageContainer}>
      <div style={profileContainer}>
        <div style={headerRow}>
          <h2 style={{ color: "#0288d1" }}>My Profile</h2>
          {!isEditing ? (
            <button style={editBtn} onClick={() => setIsEditing(true)}>EDIT PROFILE</button>
          ) : (
            <button style={saveBtn} onClick={handleSave}>SAVE CHANGES</button>
          )}
        </div>

        <div style={form}>
          {Object.keys(user).map((key) => {
            if (key === "gender" || key === "country") {
              return (
                <div style={formRow} key={key}>
                  <label style={label}>{key.toUpperCase()}</label>
                  <select name={key} value={user[key]} disabled={!isEditing} onChange={handleChange} style={input}>
                    {key === "gender" && <>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </>}
                    {key === "country" && <>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </>}
                  </select>
                </div>
              );
            } else {
              return (
                <div style={formRow} key={key}>
                  <label style={label}>{key.toUpperCase()}</label>
                  <input
                    type={key === "dob" ? "date" : key === "password" ? "password" : "text"}
                    name={key}
                    value={user[key]}
                    disabled={!isEditing}
                    onChange={handleChange}
                    style={input}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

// Styles (same as before)
const pageContainer = { display: "flex", justifyContent: "center", alignItems: "flex-start", width: "100vw", minHeight: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#333", padding: "40px 20px", boxSizing: "border-box" };
const profileContainer = { width: "500px", padding: "20px 30px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" };
const headerRow = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" };
const editBtn = { border: "2px solid #0288d1", background: "transparent", color: "#0288d1", padding: "6px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" };
const saveBtn = { border: "none", background: "#0288d1", color: "#fff", padding: "6px 16px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" };
const form = { display: "flex", flexDirection: "column", gap: "16px" };
const formRow = { display: "flex", flexDirection: "column" };
const label = { fontWeight: "bold", marginBottom: "6px", fontSize: "14px" };
const input = { padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "14px", background: "#fff" };

export default Dashboard;
