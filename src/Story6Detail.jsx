import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storybook6 from "./assets/storybook6.jpg";

function Story6Detail({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailableForBorrow = true;

  const bookData = {
    id: 6,
    title: "The Hare and The Tortoise",
    publisher: "Sterling Publisher",
    image: storybook6,
    description:
      "The Hare and The Tortoise is a classic fable, famously attributed to Aesop,that tells the story of a race between a boastful hare and a steady tortoise",
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

    alert(`${bookData.title} confirmed successfully!\nYou can view it later in your Dashboard.`);

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
      }}
    >
      {/* Book Cover */}
      <img
        src={storybook6}
        alt="Story Book 6"
        style={{
          width: "300px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
            {/* Book Details */}
      <div style={{ maxWidth: "600px", textAlign: "left" }}>
        <h1>Story Book </h1>
        <p>
          <strong>Title:</strong> The Hare and The Tortoise 
        </p>
        <p>
          <strong>Publisher:</strong> Sterling Publisher
        </p>
        <p>
          <strong>Description:</strong> The Hare and The Tortoise" is a classic fable, famously attributed to Aesop, that tells the story of a race between a boastful hare and a steady tortoise.
        </p>
        <p>
          <strong>Availability:</strong> Available for borrowing
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
        </div>
      </div>
    </div>
  );
}
export default Story6Detail;