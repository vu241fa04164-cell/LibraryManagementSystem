import React, { useState, useEffect } from "react";
import story1 from "./assets/story1.jpg";

function Story1Detail() {
  const [isFavorite, setIsFavorite] = useState(false);

  const bookData = {
    id: "story1",
    title: "Amma diarylo Konni Pageelu",
    author: "Ravi Mantri",
    description:
      "It is a heartwarming collection of tales capturing village life, family bonds, and timeless values, exploring themes of love, longing, belonging, death, and new beginnings.",
  };

  // Load favorite status from localStorage
  useEffect(() => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const existingBook = borrowedBooks.find((b) => b.id === bookData.id);
    if (existingBook && existingBook.favorite) {
      setIsFavorite(true);
    }
  }, []);

  // Borrow book
  const handleBorrow = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const existingBook = borrowedBooks.find((b) => b.id === bookData.id);

    if (!existingBook) {
      borrowedBooks.push({ ...bookData, favorite: isFavorite });
      localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
      alert(`✅ "${bookData.title}" borrowed successfully!`);
    } else {
      alert(`ℹ️ "${bookData.title}" is already borrowed.`);
    }
  };

  // Toggle favorite
  const handleFavorite = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const existingBookIndex = borrowedBooks.findIndex((b) => b.id === bookData.id);

    if (existingBookIndex >= 0) {
      // Toggle favorite for already borrowed book
      borrowedBooks[existingBookIndex].favorite = !borrowedBooks[existingBookIndex].favorite;
      setIsFavorite(borrowedBooks[existingBookIndex].favorite);
    } else {
      // If book is not borrowed yet, add it with favorite true
      borrowedBooks.push({ ...bookData, favorite: true });
      setIsFavorite(true);
    }

    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
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
        src={story1}
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
        <h1>Story Book</h1>
        <p><strong>Title:</strong> {bookData.title}</p>
        <p><strong>Author:</strong> {bookData.author}</p>
        <p style={{ lineHeight: 1.5 }}><strong>Description:</strong> {bookData.description}</p>
        <p><strong>Availability:</strong> Available for borrowing</p>

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

export default Story1Detail;
