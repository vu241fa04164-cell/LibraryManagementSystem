import React, { useState, useEffect } from "react";
import UPSC10 from "./assets/UPSC10.jpg";

function UPSC10Detail({ isLoggedIn }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const bookData = {
    id: "UPSC10", // unique ID
    title: "Amma diarylo Konni Pageelu",
    author: "Ravi Mantri",
    description:
      "It is described as a heartwarming collection of tales that transport readers to the simpler times of rural India, capturing the essence of village life, family bonds, and timeless values. It is also characterized as a beautiful and emotionally engaging love story that explores themes of love, longing, belonging, death, and new beginnings.",
    favorite: false,
  };

  useEffect(() => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const favBook = borrowedBooks.find((b) => b.id === bookData.id && b.favorite);
    if (favBook) setIsFavorite(true);
  }, []);

  const handleBorrow = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (!borrowedBooks.find((b) => b.id === bookData.id)) {
      borrowedBooks.push(bookData);
      localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
      alert(`✅ "${bookData.title}" borrowed successfully!`);
    } else {
      alert(`ℹ️ "${bookData.title}" is already borrowed.`);
    }
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
        src={UPSC10}
        alt={bookData.title}
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        }}
      />

      {/* Book Details */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h1>UPSC Book</h1>
        <p><strong>Title:</strong> {bookData.title}</p>
        <p><strong>Author:</strong> {bookData.author}</p>
        <p style={{ lineHeight: 1.5 }}><strong>Description:</strong> {bookData.description}</p>
        <p><strong>Availability:</strong> Available for borrowing</p>

        {/* Action Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={handleBorrow}
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
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
              padding: "12px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
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

export default UPSC10Detail;
