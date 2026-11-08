import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import story4 from "./assets/story4.jpg";

function Story4Detail({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailableForBorrow = true;

  const bookData = {
    id: 4,
    title: "The Clever Fox",
    publisher: "Inlkao",
    image: story4,
    description:
      "It is a Telugu storybook, likely aimed at children, featuring moral tales with illustrations. The book is designed to instill important life lessons and nurture good behavior through engaging narratives and colorful pictures.",
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
        src={story4}
        alt="Story Book 4"
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
          <strong>Title:</strong> The Clever Fox
        </p>
        <p>
          <strong>Publisher:</strong> Inlkao
        </p>
        <p>
          <strong>Description:</strong> It is a Telugu storybook, likely aimed at children, featuring moral tales with illustrations. The book is designed to instill important life lessons and nurture good behavior through engaging narratives and colorful pictures.
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

export default Story4Detail;