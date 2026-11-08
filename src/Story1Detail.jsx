import React, { useState, useEffect } from "react";
import story1 from "./assets/story1.jpg";

function Story1Detail() {
  const [isFavorite, setIsFavorite] = useState(false);

  const bookData = {
    id: 1,
    title: "Amma diarylo Konni Pageelu",
    author: "Ravi Mantri",
    image: story1,
    description:
      "A heartwarming collection of tales that transport readers to the simpler times of rural India, capturing village life, family bonds, and timeless values.",
    favorite: false,
  };

  useEffect(() => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const existingBook = borrowedBooks.find((b) => b.id === bookData.id);
    if (existingBook) setIsFavorite(existingBook.favorite || false);
  }, []);

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

  const handleFavorite = () => {
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const index = borrowedBooks.findIndex((b) => b.id === bookData.id);

    if (index >= 0) {
      borrowedBooks[index].favorite = !borrowedBooks[index].favorite;
      setIsFavorite(borrowedBooks[index].favorite);
    } else {
      // If book not borrowed yet, add it just to store favorite
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
