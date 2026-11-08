import React from "react";
import General12 from "./assets/general12.jpg";

function General12Detail() {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      {/* Book Cover */}
      <img
        src={General12}
        alt="General Book "
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Book Details */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h1>General Book </h1>
        <p>
          <strong>Title:</strong>Build Your Family Bank: A Winning Vision for Multigenerational Wealth 
        </p>
        <p>
          <strong>Author:</strong> Emily Griffiths-Hamilton 
        </p>
        <p>
          <strong>Description:</strong> The book examines the reasons for wealth erosion and failed transition plans in families, offering strategies for building effective wealth transition plans to benefit multiple generations, emphasizing the "Family Bank" approach. 
        </p>
        <p>
          <strong>Availability:</strong> Available for borrowing
        </p>

        {/* Confirm Borrow Button */}
        <button
  style={{
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
  }}
  onClick={() => alert("📚 Book is borrowed successfully!")}
>
  Confirm Borrow
</button>

      </div>
    </div>
  );
}

export default General12Detail;