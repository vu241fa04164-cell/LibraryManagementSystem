import React, { useState, useEffect } from "react";
import General10 from "./assets/general10.jpg";

function General10Detail() {
  const viewLink = "https://www.example.com/view/general10"; // replace with actual link
  const buyLink = "https://www.amazon.in/dp/example"; // replace with actual link

  const [isFavorite, setIsFavorite] = useState(false);
  const [isAvailableForBorrow, setIsAvailableForBorrow] = useState(true);

  const bookData = {
    id: 210,
    title: "A History of India",
    author: "Hermann Kulke and Dietmar Rothermund",
    image: General10,
    description: "This book covers the historical narrative of India.",
    favorite: false,
  };

  // Load favorite status from localStorage
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("favouriteBooks")) || [];
    const favBook = storedBooks.find((b) => b.id === bookData.id && b.favorite);
    if (favBook) setIsFavorite(true);
  }, []);

  // Handle Borrow
  const handleBorrow = () => {
    if (!isAvailableForBorrow) {
      alert("❌ Sorry — this book is currently unavailable to borrow.");
      return;
    }

    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (!borrowedBooks.find((b) => b.id === bookData.id)) borrowedBooks.push(bookData);

    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    alert(`📚 "${bookData.title}" borrowed successfully!`);
  };

  // Handle Favorites Toggle
  const handleFavorite = () => {
    const storedBooks = JSON.parse(localStorage.getItem("favouriteBooks")) || [];
    const bookIndex = storedBooks.findIndex((b) => b.id === bookData.id);

    if (bookIndex >= 0) {
      storedBooks[bookIndex].favorite = !storedBooks[bookIndex].favorite;
    } else {
      storedBooks.push({ ...bookData, favorite: true });
    }

    localStorage.setItem("favouriteBooks", JSON.stringify(storedBooks));
    setIsFavorite(!isFavorite);
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
        src={General10}
        alt="General Book 10"
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
        <h1 style={{ marginBottom: "8px" }}>General Book</h1>
        <p><strong>Title:</strong> {bookData.title}</p>
        <p><strong>Author:</strong> {bookData.author}</p>
        <p style={{ lineHeight: 1.5 }}>
          <strong>Description:</strong> {bookData.description}
        </p>
        <p>
          <strong>Availability:</strong>{" "}
          {isAvailableForBorrow ? "Available for borrowing" : "Currently unavailable"}
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Borrow Button */}
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

          {/* Favorites Button */}
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
              transition: "0.3s ease",
            }}
          >
            {isFavorite ? "♥ Favorited" : "♡ Add to Favorites"}
          </button>

          {/* View Book */}
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 18px",
              fontSize: "16px",
              borderRadius: "6px",
              textDecoration: "none",
              backgroundColor: "#28a745",
              color: "#fff",
            }}
          >
            View Book
          </a>

          {/* Buy Book */}
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 18px",
              fontSize: "16px",
              borderRadius: "6px",
              textDecoration: "none",
              backgroundColor: "#ff8c00",
              color: "#fff",
            }}
          >
            Buy Book
          </a>
        </div>

        {/* Note */}
        <p style={{ marginTop: "14px", fontSize: "13px", color: "#444" }}>
          Tip: You can borrow or preview this book online via{" "}
          <a href={viewLink} target="_blank" rel="noopener noreferrer">
            Online Library
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default General10Detail;
