import React, { useState, useEffect } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const books = [
    { title: "The Silent Patient", author: "Alex Michaelides" },
    { title: "It Ends With Us", author: "Colleen Hoover" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Daisy Jones & The Six", author: "Taylor Jenkins Reid" },
    { title: "Where the Crawdads Sing", author: "Delia Owens" },
    { title: "Verity", author: "Colleen Hoover" },
    { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid" },
  ];

  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      setResults([]);
      return;
    }

    // 🔍 Fuzzy Search (matches title + author together)
    const filtered = books.filter((book) =>
      `${book.title} ${book.author}`.toLowerCase().includes(term)
    );

    setResults(filtered);
  }, [searchTerm]);

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <h2 style={heading}>Search Books</h2>

        {/* Search Box */}
        <div style={searchBoxStyle}>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={inputStyle}
          />
          <button style={buttonStyle}>🔍</button>
        </div>

        {/* Results */}
        <div style={resultBoxStyle}>
          {searchTerm && results.length === 0 ? (
            <p style={noResultStyle}>❌ No results found for "{searchTerm}"</p>
          ) : (
            results.map((book, index) => (
              <div key={index} style={resultCardStyle}>
                <h3 style={bookTitle}>{book.title}</h3>
                <p style={bookAuthor}>by {book.author}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// =============================================
// Styles
// =============================================

const containerStyle = {
  width: "100vw",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
  display: "flex",
  justifyContent: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
  fontFamily: "Poppins, sans-serif",
};

const contentWrapperStyle = {
  width: "90%",
  maxWidth: "800px",
  padding: "30px",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
};

const heading = {
  textAlign: "center",
  fontSize: "28px",
  color: "#1e3a8a",
  marginBottom: "25px",
};

const searchBoxStyle = {
  display: "flex",
  marginBottom: "20px",
};

const inputStyle = {
  flex: 1,
  padding: "12px 15px",
  border: "1px solid #ccc",
  borderRadius: "8px 0 0 8px",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "12px 16px",
  border: "1px solid #3b82f6",
  borderLeft: "none",
  borderRadius: "0 8px 8px 0",
  background: "#3b82f6",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
};

const resultBoxStyle = {
  background: "#f9fafb",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
  minHeight: "150px",
  marginTop: "10px",
};

const resultCardStyle = {
  background: "#eff6ff",
  padding: "12px 16px",
  borderRadius: "8px",
  marginBottom: "10px",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

const bookTitle = {
  margin: 0,
  color: "#1d4ed8",
  fontSize: "18px",
  fontWeight: "600",
};

const bookAuthor = {
  margin: "4px 0 0",
  color: "#374151",
  fontSize: "15px",
};

const noResultStyle = {
  textAlign: "center",
  color: "#9ca3af",
  fontSize: "16px",
};

export default Search;
