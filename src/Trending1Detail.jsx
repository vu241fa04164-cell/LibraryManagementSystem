import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import trending1 from "./assets/trending1.jpg";

function Trending1Detail({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // External links
  const pdfLink =
    "https://ebookk.ir/wp-content/uploads/2025/01/Onyx-Storm_p01-20.pdf";
  const buyLink =
    "https://www.amazon.in/Onyx-Storm-Rebecca-Yarros/dp/1795652023";

  const isAvailableForBorrow = true;

  const bookData = {
    id: 1, // unique id for tracking favorites
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    image: trending1,
    description:
      "Onyx Storm continues the story of Violet Sorrengail as she ventures beyond the walls of Basgiath War College to seek allies for the Revolution. The book explores themes of war, battle, and political intrigue, as Violet navigates challenges and keeps a significant secret to protect her dragons, family, and home.",
    favorite: false,
  };

  useEffect(() => {
    // Check if book is already favorite
    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const favBook = borrowedBooks.find((b) => b.id === bookData.id && b.favorite);
    if (favBook) setIsFavorite(true);
  }, []);

  const handleBorrow = () => {
    if (!isAvailableForBorrow) {
      alert("❌ Sorry — this book is currently unavailable to borrow.");
      return;
    }

    alert(`✅ "${bookData.title}" confirmed successfully!\nYou can view it later in your Dashboard.`);

    const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    borrowedBooks.push(bookData);
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));

    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "/Trending1");
      localStorage.setItem("bookAfterLogin", JSON.stringify(bookData));
      navigate("/login");
      return;
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
        src={trending1}
        alt="Trending Book 1"
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
        <h1 style={{ marginBottom: "8px" }}>Trending Book</h1>
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
          {/* Confirm Borrow */}
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

          {/* Favorite Button */}
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

          {/* View PDF */}
          <a
            href={pdfLink}
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
            View PDF
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
      </div>
    </div>
  );
}

export default Trending1Detail;
