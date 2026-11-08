import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorite books from localStorage
    const allBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const favs = allBooks.filter((book) => book.favorite);
    setFavorites(favs);
  }, []);

  const handleRemoveFavorite = (index) => {
    const updated = [...favorites];
    updated.splice(index, 1);
    setFavorites(updated);

    // Update localStorage
    const allBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    const newBooks = allBooks.map((book) =>
      book.favorite && book.id === favorites[index].id
        ? { ...book, favorite: false }
        : book
    );
    localStorage.setItem("borrowedBooks", JSON.stringify(newBooks));
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#f0f4f8",
        padding: "30px 20px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "32px" }}>
        My Favorites
      </h1>

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
          You have no favorite books yet. <br />
          Browse and add some!
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {favorites.map((book, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                background: "#fff3e0",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  {book.title}
                </h2>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {book.description}
                </p>
              </div>
              <button
                onClick={() => handleRemoveFavorite(index)}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  background: "#ff6b6b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => navigate("/home")}
          style={{
            padding: "12px 25px",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Browse More Books
        </button>
      </div>
    </div>
  );
}

export default Favorites;
