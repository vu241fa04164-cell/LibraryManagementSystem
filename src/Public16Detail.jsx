import React, { useState, useEffect } from "react";
import public16 from "./assets/public16.jpg";

function Public16Detail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAvailableForBorrow, setIsAvailableForBorrow] = useState(true);

  const bookData = {
    id: 516,
    title: "ENGLISH FOR BANK EXAMS",
    author: "S Chand",
    description:
      "This book is designed for English preparation for various bank exams, including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and other bank exams.",
    favorite: false,
  };

  useEffect(() => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const favBook = borrowedBooks.find((b) => b.id === bookData.id && b.favorite);
    if (favBook) setIsFavorite(true);
  }, []);

  const handleBorrow = () => {
    if (!isAvailableForBorrow) {
      alert("❌ Sorry — this book is currently unavailable to borrow.");
      return;
    }

    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (!borrowedBooks.find((b) => b.id === bookData.id)) borrowedBooks.push(bookData);

    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    alert("📚 Book is borrowed successfully!");
  };

  const handleFavorite = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const bookIndex = borrowedBooks.findIndex((b) => b.id === bookData.id);

    if (bookIndex >= 0) {
      borrowedBooks[bookIndex].favorite = !borrowedBooks[bookIndex].favorite;
    } else {
      borrowedBooks.push({ ...bookData, favorite: true });
    }

    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    setIsFavorite(!isFavorite);
    alert(isFavorite ? "💔 Removed from favorites!" : "💖 Added to favorites!");
  };

  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "40px",
        flexWrap: "wrap",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Book Cover */}
      <img
        src={public16}
        alt={bookData.title}
        style={{
          width: "300px",
          height: "420px",
          objectFit: "cover",
          borderRadius: "15px",
          marginTop: "25px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        }}
      />

      {/* Book Details */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h1 style={{ marginBottom: "8px" }}>Public Book</h1>
        <p>
          <strong>Title:</strong> {bookData.title}
        </p>
        <p>
          <strong>Author:</strong> {bookData.author}
        </p>
        <p style={{ lineHeight: 1.5 }}>
          <strong>Description:</strong> {bookData.description}
        </p>
        <p>
          <strong>Availability:</strong>{" "}
          {isAvailableForBorrow ? "Available for borrowing" : "Currently unavailable"}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleBorrow}
            style={{
              padding: "12px 18px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
            }}
          >
            Confirm Borrow
          </button>

          <button
            onClick={handleFavorite}
            style={{
              padding: "12px 18px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
              backgroundColor: isFavorite ? "#ff4081" : "#ccc",
              color: "#fff",
              border: "none",
            }}
          >
            {isFavorite ? "♥ Favorited" : "♡ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Public16Detail;
