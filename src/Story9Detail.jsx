import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storybook9 from "./assets/storybook9.jpg";

function Story9Detail({ isLoggedIn }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const isAvailableForBorrow = true;

  const bookData = {
    id: 9,
    title: "Hitopadesha Kathalu",
    publisher: "Tulika Publishers",
    image: storybook9,
    description:
      "The Hitopadesha is an ancient Indian collection of fables, written in Sanskrit, known for its moral and philosophical teachings presented through stories, often featuring animal characters. It is structured similarly to the Panchatantra, another well-known collection of Indian fables.",
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
        src={storybook9}
        alt="Story Book 9"
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
          <strong>Title:</strong> Hitopadesha Kathalu
        </p>
        <p>
          <strong>Publisher:</strong> Tulika Publishers
        </p>
        <p>
          <strong>Description:</strong> The Hitopadesha is an ancient Indian
          collection of fables, written in Sanskrit, known for its moral and
          philosophical teachings presented through stories, often featuring
          animal characters. It is structured similarly to the Panchatantra,
          another well-known collection of Indian fables.
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
export default Story9Detail;