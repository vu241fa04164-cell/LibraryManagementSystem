import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyBooks() {
  const navigate = useNavigate();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    setBorrowedBooks(books);
  }, []);

  const handleReturnBook = (index) => {
    const updatedBooks = borrowedBooks.filter((_, i) => i !== index);
    setBorrowedBooks(updatedBooks);
    localStorage.setItem("borrowedBooks", JSON.stringify(updatedBooks));
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#f4f4f9",
        padding: "40px 20px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px" }}>
        My Borrowed Books
      </h1>

      {borrowedBooks.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "20px", color: "#555" }}>
          You have not borrowed any books yet. <br />
          Go back and borrow your favorite books!
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "25px",
            width: "100%",
          }}
        >
          {borrowedBooks.map((book, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{book.title}</h2>
                <p style={{ fontSize: "14px", color: "#666" }}>{book.description}</p>
              </div>
              <button
                onClick={() => handleReturnBook(index)}
                style={{
                  marginTop: "15px",
                  padding: "12px",
                  background: "#ff4b5c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#ff1e3c")}
                onMouseOut={(e) => (e.target.style.background = "#ff4b5c")}
              >
                Return Book
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "14px 30px",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#43a047")}
          onMouseOut={(e) => (e.target.style.background = "#4caf50")}
        >
          Browse More Books
        </button>
      </div>
    </div>
  );
}

export default MyBooks;
