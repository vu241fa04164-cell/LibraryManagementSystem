import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function RecentlyViewed() {
  const navigate = useNavigate();
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const recent = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(recent.reverse().slice(0, 10)); // last 10 viewed books
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (recentlyViewed.length === 0) {
    return <p style={{ color: "#555" }}>You haven't viewed any books yet.</p>;
  }

  return (
    <div style={{ width: "100%", maxWidth: "900px", position: "relative", margin: "30px 0" }}>
      <h2 style={{ marginBottom: "15px", color: "#333" }}>Recently Viewed</h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          style={{
            background: "#ff6f61",
            border: "none",
            color: "#fff",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Books */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "10px",
          }}
        >
          {recentlyViewed.map((book, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/book/${book.id}`)}
              style={{
                minWidth: "160px",
                borderRadius: "15px",
                background: "#fff",
                cursor: "pointer",
                boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                textAlign: "center",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0 0 35px rgba(0,0,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <div style={{ padding: "8px" }}>
                <h4
                  style={{
                    fontSize: "14px",
                    margin: "0 0 5px 0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.title}
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#555",
                    margin: 0,
                    height: "30px",
                    overflow: "hidden",
                  }}
                >
                  {book.description.slice(0, 50)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          style={{
            background: "#ff6f61",
            border: "none",
            color: "#fff",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default RecentlyViewed;
