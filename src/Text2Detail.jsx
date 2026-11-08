import React, { useState, useEffect } from "react";
import text2 from "./assets/text2.jpg";

function Text2Detail() {
  const viewLink =
    "https://example.com/electronics-engineering.pdf"; // Replace with actual PDF link
  const buyLink =
    "https://www.amazon.in/Electronics-Engineering-D-C-Tayal/dp/B0XXXXXXX"; // Replace with actual Amazon link

  const bookData = {
    id: 602,
    title: "Electronics Engineering",
    author: "D.C. Tayal and Praveen Tayal",
    description:
      "It provides a comprehensive treatment of electronic circuit analysis and design, including topics like semiconductor devices, amplifiers, oscillators, operational amplifiers, power supplies, and digital electronics.",
    favorite: false,
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailableForBorrow = true;

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const favBook = savedBooks.find((b) => b.id === bookData.id && b.favorite);
    if (favBook) setIsFavorite(true);
  }, []);

  const handleBorrow = () => {
    if (!isAvailableForBorrow) {
      alert("❌ Sorry — this book is currently unavailable to borrow.");
      return;
    }
    const savedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    if (!savedBooks.find((b) => b.id === bookData.id)) savedBooks.push(bookData);
    localStorage.setItem("borrowedBooks", JSON.stringify(savedBooks));
    alert("📚 Book is borrowed successfully!");
  };

  const handleFavorite = () => {
    const savedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const index = savedBooks.findIndex((b) => b.id === bookData.id);

    if (index >= 0) {
      savedBooks[index].favorite = !savedBooks[index].favorite;
    } else {
      savedBooks.push({ ...bookData, favorite: true });
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
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={text2}
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
        <h1 style={{ marginBottom: "8px" }}>Text Book</h1>
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
      </div>
    </div>
  );
}

export default Text2Detail;
