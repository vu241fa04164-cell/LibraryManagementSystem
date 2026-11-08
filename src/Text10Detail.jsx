import React, { useState, useEffect } from "react";
import textbook10 from "./assets/textbook10.jpg";

function Text10Detail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailableForBorrow = true;
  const bookId = 10; // Unique ID for this book

  // Load favorite status from localStorage
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const favBook = savedBooks.find((b) => b.id === bookId && b.favorite);
    if (favBook) setIsFavorite(true);
  }, [bookId]);

  const handleBorrow = () => {
    if (!isAvailableForBorrow) {
      alert("❌ Sorry — this book is currently unavailable to borrow.");
      return;
    }
    const savedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (!savedBooks.find((b) => b.id === bookId)) {
      savedBooks.push({
        id: bookId,
        title: "A Textbook of Building Construction",
        publisher: "Dr.S.K.Sharma",
        description:
          "The book covers fundamental concepts and practices in building construction, including building components, foundations, materials, and various structural elements.",
        favorite: false,
      });
      localStorage.setItem("borrowedBooks", JSON.stringify(savedBooks));
    }
    alert("📚 Book is borrowed successfully!");
  };

  const handleFavorite = () => {
    const savedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const index = savedBooks.findIndex((b) => b.id === bookId);

    if (index >= 0) {
      savedBooks[index].favorite = !savedBooks[index].favorite;
    } else {
      savedBooks.push({
        id: bookId,
        title: "A Textbook of Building Construction",
        publisher: "Dr.S.K.Sharma",
        description:
          "The book covers fundamental concepts and practices in building construction, including building components, foundations, materials, and various structural elements.",
        favorite: true,
      });
    }

    localStorage.setItem("borrowedBooks", JSON.stringify(savedBooks));
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
      }}
    >
      {/* Book Cover */}
      <img
        src={textbook10}
        alt="Text Book 10"
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Book Details */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h1>Text Book</h1>
        <p>
          <strong>Title:</strong> A Textbook of Building Construction
        </p>
        <p>
          <strong>Publisher:</strong> Dr.S.K.Sharma
        </p>
        <p>
          <strong>Description:</strong> The book covers fundamental concepts and practices in building construction, including building components, foundations, materials, and various structural elements.
        </p>
        <p>
          <strong>Availability:</strong>{" "}
          {isAvailableForBorrow ? "Available for borrowing" : "Currently unavailable"}
        </p>

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

export default Text10Detail;
