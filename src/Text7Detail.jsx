import React, { useState, useEffect } from "react";
import textbook7 from "./assets/textbook7.jpg";

function Text7Detail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailableForBorrow = true;
  const bookId = 7; // Unique ID for this book

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
        title: "Nava Vasantham - 3 Telugu Textbook (Class 8)",
        publisher: "Vasundhara Publications",
        description:
          "The book 'నవ వసంతం-3 తెలుగు వాచకం ఎనిమిదో తరగతి (ప్రథమ భాష)' is a Telugu language textbook designed for 8th-grade students in Andhra Pradesh, prescribed by SCERT.",
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
        title: "Nava Vasantham - 3 Telugu Textbook (Class 8)",
        publisher: "Vasundhara Publications",
        description:
          "The book 'నవ వసంతం-3 తెలుగు వాచకం ఎనిమిదో తరగతి (ప్రథమ భాష)' is a Telugu language textbook designed for 8th-grade students in Andhra Pradesh, prescribed by SCERT.",
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
        src={textbook7}
        alt="Text Book 7"
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
          <strong>Title:</strong> Nava Vasantham - 3 Telugu Textbook (Class 8)
        </p>
        <p>
          <strong>Publisher:</strong> Vasundhara Publications
        </p>
        <p>
          <strong>Description:</strong> The book "నవ వసంతం-3 తెలుగు వాచకం ఎనిమిదో తరగతి (ప్రథమ భాష)" is a Telugu language textbook designed for 8th-grade students in Andhra Pradesh, prescribed by SCERT.
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

export default Text7Detail;
