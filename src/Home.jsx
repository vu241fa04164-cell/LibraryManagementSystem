import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import trending1 from "./assets/trending1.jpg";
import trending2 from "./assets/trending2.jpg";
import trending3 from "./assets/trending3.jpg";
import trending4 from "./assets/trending4.jpg";
import trending5 from "./assets/trending5.jpg";
import trending6 from "./assets/trending6.jpg";
import trending7 from "./assets/trending7.jpg";
import trending8 from "./assets/trending8.jpg";
import trending9 from "./assets/trending9.jpg";
import trending10 from "./assets/trending10.jpg";
import trending11 from "./assets/trending11.jpg";
import trending12 from "./assets/trending12.jpg";
import trending13 from "./assets/trending13.jpg";
import trending14 from "./assets/trending14.jpg";
import trending15 from "./assets/trending15.jpg";
import trending16 from "./assets/trending16.jpg";
import trending17 from "./assets/trending17.jpg";
import trending18 from "./assets/trending18.jpg";
import trending19 from "./assets/trending19.jpg";
// 🔹 UPSC
import UPSC1 from "./assets/UPSC1.jpg";
import UPSC2 from "./assets/UPSC2.jpg";
import UPSC3 from "./assets/UPSC3.jpg";
import UPSC4 from "./assets/UPSC4.jpg";
import UPSC5 from "./assets/UPSC5.jpg";
import UPSC6 from "./assets/UPSC6.jpg";
import UPSC7 from "./assets/UPSC7.jpg";
import UPSC8 from "./assets/UPSC8.jpg";
import UPSC9 from "./assets/UPSC9.jpg";
import UPSC10 from "./assets/UPSC10.jpg";
import UPSC11 from "./assets/UPSC11.jpg";
import UPSC12 from "./assets/UPSC12.jpg";
import UPSC13 from "./assets/UPSC13.jpg";
import UPSC14 from "./assets/UPSC14.jpg";
import UPSC15 from "./assets/UPSC15.jpg";
// ... keep importing all images as you did
// 🔹 General Knowledge
import general1 from "./assets/general1.jpg";
import general2 from "./assets/general2.jpg";
import general3 from "./assets/general3.jpg";
import general4 from "./assets/general4.jpg";
import general5 from "./assets/general5.jpg";
import general6 from "./assets/general6.jpg";
import general7 from "./assets/general7.jpg";
import general8 from "./assets/general8.jpg";
import general9 from "./assets/general9.jpg";
import general10 from "./assets/general10.jpg";
import general11 from "./assets/general11.jpg";
import general12 from "./assets/general12.jpg";
import general13 from "./assets/general13.jpg";
import general14 from "./assets/general14.jpg";
import general15 from "./assets/general15.jpg";

// 🔹 Text Books
import text1 from "./assets/text1.jpg";
import text2 from "./assets/text2.jpg";
import text3 from "./assets/text3.jpg";
import text4 from "./assets/text4.jpg";
import textbook5 from "./assets/textbook5.jpg";
import textbook6 from "./assets/textbook6.jpg";
import textbook7 from "./assets/textbook7.jpg";
import textbook8 from "./assets/textbook8.jpg";
import textbook9 from "./assets/textbook9.jpg";
import textbook10 from "./assets/textbook10.jpg";
import textbook11 from "./assets/textbook11.jpg";
import textbook12 from "./assets/textbook12.jpg";
import textbook13 from "./assets/textbook13.jpg";
import textbook14 from "./assets/textbook14.jpg";
import textbook15 from "./assets/textbook15.jpg";
import textbook16 from "./assets/textbook16.jpg";
import textbook17 from "./assets/textbook17.jpg";
import textbook18 from "./assets/textbook18.jpg";
import textbook19 from "./assets/textbook19.jpg";
import textbook20 from "./assets/textbook20.jpg";
import textbook21 from "./assets/textbook21.jpg";
import textbook22 from "./assets/textbook22.jpg";
import textbook23 from "./assets/textbook23.jpg";
import textbook24 from "./assets/textbook24.jpg";
import textbook25 from "./assets/textbook25.jpg"; // ✅
 // 🔹 Story Books
import story1 from "./assets/story1.jpg";
import story2 from "./assets/story2.jpg";
import story3 from "./assets/story3.jpg";
import story4 from "./assets/story4.jpg";
import storybook5 from "./assets/storybook5.jpg";
import storybook6 from "./assets/storybook6.jpg";
import storybook7 from "./assets/storybook7.jpg";
import storybook8 from "./assets/storybook8.jpg";
import storybook9 from "./assets/storybook9.jpg";

// 🔹 Ancient Books
import anicent1 from "./assets/anicent1.jpg";
import anicent2 from "./assets/anicent2.jpg";
import anicent3 from "./assets/anicent3.jpg";
import anicent4 from "./assets/anicent4.jpg";
import anicent5 from "./assets/anicent5.jpg";
import anicent6 from "./assets/anicent6.jpg";
import anicent7 from "./assets/anicent7.jpg";
import anicent8 from "./assets/anicent8.jpg";
import anicent9 from "./assets/anicent9.jpg";
import anicent10 from "./assets/anicent10.jpg";

// 🔹 Public Books
import public1 from "./assets/public1.jpg";
import public2 from "./assets/public2.jpg";
import public3 from "./assets/public3.jpg";
import public4 from "./assets/public4.jpg";
import public5 from "./assets/public5.jpg";
import public6 from "./assets/public6.jpg";
import public7 from "./assets/public7.jpg";
import public8 from "./assets/public8.jpg";
import public9 from "./assets/public9.jpg";
import public10 from "./assets/public10.jpg";
import public11 from "./assets/public11.jpg";
import public12 from "./assets/public12.jpg";
import public13 from "./assets/public13.jpg";
import public14 from "./assets/public14.jpg";
import public15 from "./assets/public15.jpg";
import public16 from "./assets/public16.jpg";
import public17 from "./assets/public17.jpg";
import public18 from "./assets/public18.jpg";

// 🔹 Literature Books
import literature1 from "./assets/literature1.jpg";
import literature2 from "./assets/literature2.jpg";
import literatue3 from "./assets/literature3.jpg"; // ✅
import literature4 from "./assets/literature4.jpg";
import literature5 from "./assets/literature5.jpg";
import literature6 from "./assets/literature6.jpg";
import literature7 from "./assets/literature7.jpg";
import literature8 from "./assets/literature8.jpg";
import literature9 from "./assets/literature9.jpg";
import literature10 from "./assets/literature10.jpg";
import literature11 from "./assets/literature11.jpg";
import literature12 from "./assets/literature12.jpg";
import literature13 from "./assets/literature13.jpg";
import literature14 from "./assets/literature14.jpg";
import literature15 from "./assets/literature15.jpg";
import literature16 from "./assets/literature16.jpg";
import literature17 from "./assets/literature17.jpg";
import literature18 from "./assets/literature18.jpg";
import literature19 from "./assets/literature19.jpg";
import literature20 from "./assets/literature20.jpg";
import literature21 from "./assets/literature21.jpg"; // ✅
import literature22 from "./assets/literature22.jpg"; // ✅
import literature23 from "./assets/literature23.jpg"; // ✅
import literature24 from "./assets/literature24.jpg"; // ✅

import classic1 from "./assets/classic1.jpg";
import classic2 from "./assets/classic2.jpg";
import classic3 from "./assets/classic3.jpg";
import classic4 from "./assets/classic4.jpg";
import classic5 from "./assets/classic5.jpg";
import classic6 from "./assets/classic6.jpg";
import classic7 from "./assets/classic7.jpg";
import classic8 from "./assets/classic8.jpg";
import classic9 from "./assets/classic9.jpg";
import classic10 from "./assets/classic10.jpg";
import classic11 from "./assets/classic11.jpg";
import classic12 from "./assets/classic12.jpg";
import classic13 from "./assets/classic13.jpg";
import classic14 from "./assets/classic14.jpg";
import classic15 from "./assets/classic15.jpg";


function Home() {
  const navigate = useNavigate();

  const bookCategories = {
Trending: [
      { id: 1, title: "Trending Book 1", image: trending1, link: "/Trending1" },
      { id: 2, title: "Trending Book 2", image: trending2, link: "/Trending2" },
      { id: 3, title: "Trending Book 3", image: trending3, link: "/Trending3" },
      { id: 4, title: "Trending Book 4", image: trending4, link: "/Trending4" },
      { id: 5, title: "Trending Book 5", image: trending5, link: "/Trending5" },
      { id: 6, title: "Trending Book 6", image: trending6, link: "/Trending6" },
      { id: 7, title: "Trending Book 7", image: trending7, link: "/Trending7" },
      { id: 8, title: "Trending Book 8", image: trending8, link: "/Trending8" },
      { id: 9, title: "Trending Book 9", image: trending9, link: "/Trending9" },
      { id: 10, title: "Trending Book 10", image: trending10, link: "/Trending10" },
      { id: 11, title: "Trending Book 11", image: trending11, link: "/Trending11" },
      { id: 12, title: "Trending Book 12", image: trending12, link: "/Trending12" },
      { id: 13, title: "Trending Book 13", image: trending13, link: "/Trending13" },
      { id: 14, title: "Trending Book 14", image: trending14, link: "/Trending14" },
      { id: 15, title: "Trending Book 15", image: trending15, link: "/Trending15" },
      { id: 16, title: "Trending Book 16", image: trending16, link: "/Trending16" },
      { id: 17, title: "Trending Book 17", image: trending17, link: "/Trending17" },
      { id: 18, title: "Trending Book 18", image: trending18, link: "/Trending18" },
      { id: 19, title: "Trending Book 19", image: trending19, link: "/Trending19" },

      // ... keep all books exactly as before
    ],
    UPSC: [
      { id: 1, title: "UPSC Book 1", image: UPSC1, link: "/upsc1"},
      { id: 2, title: "UPSC Book 2", image: UPSC2, link: "/upsc2" },
      { id: 3, title: "UPSC Book 3", image: UPSC3, link: "/upsc3" },
      { id: 4, title: "UPSC Book 4", image: UPSC4, link: "/upsc4"},
      { id: 5, title: "UPSC Book 5", image: UPSC5, link: "/upsc5" },
      { id: 6, title: "UPSC Book 6", image: UPSC6, link: "/upsc6"},
      { id: 7, title: "UPSC Book 7", image: UPSC7, link: "/upsc7"},
      { id: 8, title: "UPSC Book 8", image: UPSC8, link: "/upsc8"},
      { id: 9, title: "UPSC Book 9", image: UPSC9, link: "/upsc9"},
      { id: 10, title: "UPSC Book 10", image: UPSC10, link: "/UPSC10"},
      { id: 11, title: "UPSC Book 11", image: UPSC11, link: "/upsc11"},
      { id: 12, title: "UPSC Book 12", image: UPSC12, link: "/upsc12"},
      { id: 13, title: "UPSC Book 13", image: UPSC13, link: "/upsc13"},
      { id: 14, title: "UPSC Book 14", image: UPSC14, link: "/upsc14"},
      { id: 15, title: "UPSC Book 15", image: UPSC15, link: "/upsc15"},
    ],
"General Knowledge": [
      { id: 1, title: "GK Book 1", image: general1,link: "/General1" },
      { id: 2, title: "GK Book 2", image: general2,link: "/General2" },
      { id: 3, title: "GK Book 3", image: general3,link: "/General3" },
      { id: 4, title: "GK Book 4", image: general4,link: "/General4" },
      { id: 5, title: "GK Book 5", image: general5,link: "/General5" },
      { id: 6, title: "GK Book 6", image: general6,link: "/General6" },
      { id: 7, title: "GK Book 7", image: general7,link: "/General7" },
      { id: 8, title: "GK Book 8", image: general8,link: "/General8" },
      { id: 9, title: "GK Book 9", image: general9 ,link: "/General9"},
      { id: 10, title: "GK Book 10", image: general10,link: "/General10" },
      { id: 11, title: "GK Book 11", image: general11,link: "/General11" },
      { id: 12, title: "GK Book 12", image: general12,link: "/General12" },
      { id: 13, title: "GK Book 13", image: general13,link: "/General13" },
      { id: 14, title: "GK Book 14", image: general14,link: "/General14" },
      { id: 15, title: "GK Book 15", image: general15,link: "/General15" },
    ],
    "Text Books": [
      { id: 1, title: "Text Book 1", image: text1, link: "/text1"},
      { id: 2, title: "Text Book 2", image: text2, link: "/text2" },
      { id: 3, title: "Text Book 3", image: text3, link: "/text3" },
      { id: 4, title: "Text Book 4", image: text4 , link: "/text4"},
      { id: 5, title: "Text Book 5", image: textbook5, link: "/text5" },
      { id: 6, title: "Text Book 6", image: textbook6, link: "/text6" },
      { id: 7, title: "Text Book 7", image: textbook7, link: "/text7" },
      { id: 8, title: "Text Book 8", image: textbook8 , link: "/text8"},
      { id: 9, title: "Text Book 9", image: textbook9, link: "/text9" },
      { id: 10, title: "Text Book 10", image: textbook10, link: "/text10" },
      { id: 11, title: "Text Book 11", image: textbook11, link: "/text11" },
      { id: 12, title: "Text Book 12", image: textbook12, link: "/text12" },
      { id: 13, title: "Text Book 13", image: textbook13, link: "/text13" },
      { id: 14, title: "Text Book 14", image: textbook14, link: "/text14" },
      { id: 15, title: "Text Book 15", image: textbook15, link: "/text15" },
      { id: 16, title: "Text Book 16", image: textbook16 , link: "/text16"},
      { id: 17, title: "Text Book 17", image: textbook17, link: "/text17" },
      { id: 18, title: "Text Book 18", image: textbook18, link: "/text18" },
      { id: 19, title: "Text Book 19", image: textbook19, link: "/text19" },
      { id: 20, title: "Text Book 20", image: textbook20, link: "/text10" },
      { id: 21, title: "Text Book 21", image: textbook21, link: "/text21" },
      { id: 22, title: "Text Book 22", image: textbook22, link: "/text22" },
      { id: 23, title: "Text Book 23", image: textbook23, link: "/text23" },
      { id: 24, title: "Text Book 24", image: textbook24, link: "/text24" },
      { id: 25, title: "Text Book 25", image: textbook25, link: "/text25" },
    ],
    "Story Books": [
      { id: 1, title: "Story Book 1", image: story1, link: "/story1" },
      { id: 2, title: "Story Book 2", image: story2, link: "/story2" },
      { id: 3, title: "Story Book 3", image: story3, link: "/story3" },
      { id: 4, title: "Story Book 4", image: story4, link: "/story4" },
      { id: 5, title: "Story Book 5", image: storybook5, link: "/story5" },
      { id: 6, title: "Story Book 6", image: storybook6, link: "/story6" },
      { id: 7, title: "Story Book 7", image: storybook7, link: "/story7" },
      { id: 8, title: "Story Book 8", image: storybook8, link: "/story8" },
      { id: 9, title: "Story Book 9", image: storybook9, link: "/story9" },
    ],
    "Ancient Books": [
      { id: 1, title: "Anicent Book 1", image: anicent1, link: "/anicent1" },
      { id: 2, title: "Anicent Book 2", image: anicent2, link: "/anicent2" },
      { id: 3, title: "Anicent Book 3", image: anicent3, link: "/anicent3"},
      { id: 4, title: "Anicent Book 4", image: anicent4, link: "/anicent4" },
      { id: 5, title: "Anicent Book 5", image: anicent5, link: "/anicent5" },
      { id: 6, title: "Anicent Book 6", image: anicent6, link: "/anicent6" },
      { id: 7, title: "Anicent Book 7", image: anicent7, link: "/anicent7" },
      { id: 8, title: "Anicent Book 8", image: anicent8, link: "/anicent8" },
      { id: 9, title: "Anicent Book 9", image: anicent9, link: "/anicent9" },
      { id: 10, title: "Anicent Book 10", image: anicent10, link: "/anicent10" },
    ],
    "Public Books": [
      { id: 1, title: "Public Book 1", image: public1, link: "/Public1" },
      { id: 2, title: "Public Book 2", image: public2, link: "/Public2" },
      { id: 3, title: "Public Book 3", image: public3, link: "/Public3" },
      { id: 4, title: "Public Book 4", image: public4, link: "/Public4" },
      { id: 5, title: "Public Book 5", image: public5, link: "/Public5" },
      { id: 6, title: "Public Book 6", image: public6, link: "/Public6" },
      { id: 7, title: "Public Book 7", image: public7, link: "/Public7" },
      { id: 8, title: "Public Book 8", image: public8, link: "/Public8" },
      { id: 9, title: "Public Book 9", image: public9, link: "/Public9" },
      { id: 10, title: "Public Book 10", image: public10, link: "/Public10" },
      { id: 11, title: "Public Book 11", image: public11, link: "/Public11" },
      { id: 12, title: "Public Book 12", image: public12, link: "/Public12" },
      { id: 13, title: "Public Book 13", image: public13, link: "/Public13" },
      { id: 14, title: "Public Book 14", image: public14, link: "/Public14" },
      { id: 15, title: "Public Book 15", image: public15, link: "/Public15" },
      { id: 16, title: "Public Book 16", image: public16, link: "/Public16" },
      { id: 17, title: "Public Book 17", image: public17, link: "/Public17" },
      { id: 18, title: "Public Book 18", image: public18, link: "/Public18" },
    ],
    "Literature Books": [
      { id: 1, title: "Literature Book 1", image: literature1, link: "/literature1" },
      { id: 2, title: "Literature Book 2", image: literature2, link: "/literature2" },
      { id: 3, title: "Literature Book 3", image: literatue3, link: "/literature3" },
      { id: 4, title: "Literature Book 4", image: literature4, link: "/literature4" },
      { id: 5, title: "Literature Book 5", image: literature5, link: "/literature5" },
      { id: 6, title: "Literature Book 6", image: literature6, link: "/literature6" },
      { id: 7, title: "Literature Book 7", image: literature7, link: "/literature7" },
      { id: 8, title: "Literature Book 8", image: literature8, link: "/literature8" },
      { id: 9, title: "Literature Book 9", image: literature9, link: "/literature9" },
      { id: 10, title: "Literature Book 10", image: literature10, link: "/literature10" },
      { id: 11, title: "Literature Book 11", image: literature11, link: "/literature11" },
      { id: 12, title: "Literature Book 12", image: literature12, link: "/literature12" },
      { id: 13, title: "Literature Book 13", image: literature13, link: "/literature13" },
      { id: 14, title: "Literature Book 14", image: literature14, link: "/literature14" },
      { id: 15, title: "Literature Book 15", image: literature15, link: "/literature15" },
      { id: 16, title: "Literature Book 16", image: literature16, link: "/literature16" },
      { id: 17, title: "Literature Book 17", image: literature17, link: "/literature17" },
      { id: 18, title: "Literature Book 18", image: literature18, link: "/literature18" },
      { id: 19, title: "Literature Book 19", image: literature19, link: "/literature19" },
      { id: 20, title: "Literature Book 20", image: literature20, link: "/literature20" },
      { id: 21, title: "Literature Book 21", image: literature21, link: "/literature21" },
      { id: 22, title: "Literature Book 22", image: literature22, link: "/literature22" },
      { id: 23, title: "Literature Book 23", image: literature23, link: "/literature23" },
      { id: 24, title: "Literature Book 24", image: literature24, link: "/literature24" },
    ],
    "Classic Books": [
      { id: 1, title: "Classic Book 1", image: classic1, link: "/classic1" },
      { id: 2, title: "Classic Book 2", image: classic2, link: "/classic2" },
      { id: 3, title: "Classic Book 3", image: classic3, link: "/classic3" },
      { id: 4, title: "Classic Book 4", image: classic4, link: "/classic4" },
      { id: 5, title: "Classic Book 5", image: classic5, link: "/classic5" },
      { id: 6, title: "Classic Book 6", image: classic6, link: "/classic6" },
      { id: 7, title: "Classic Book 7", image: classic7, link: "/classic7" },
      { id: 8, title: "Classic Book 8", image: classic8, link: "/classic8" },
      { id: 9, title: "Classic Book 9", image: classic9, link: "/classic9" },
      { id: 10, title: "Classic Book 10", image: classic10, link: "/classic10" },
      { id: 11, title: "Classic Book 11", image: classic11, link: "/classic11" },
      { id: 12, title: "Classic Book 12", image: classic12, link: "/classic12" },
      { id: 13, title: "Classic Book 13", image: classic13, link: "/classic13" },
      { id: 14, title: "Classic Book 14", image: classic14, link: "/classic14" },
      { id: 15, title: "Classic Book 15", image: classic15, link: "/classic15" },

    ],
  };


  const categories = Object.keys(bookCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const books = bookCategories[selectedCategory];

  return (
    <div
      style={{
        width: "100vw",
        overflowY: "auto",
        backgroundColor: "#f8f8f8",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h2>Select Book Category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "25px",
            justifyItems: "center",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "180px",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  backgroundColor: "#dcd0b5",
                  color: "#000",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "0.9rem",
                }}
                onClick={() => {
                  if (localStorage.getItem("isLoggedIn") === "true") {
                    navigate(book.link, { state: { book } });
                  } else {
                    localStorage.setItem("redirectAfterLogin", book.link);
                    navigate("/login");
                  }
                }}
              >
                Borrow
              </button>
            </div>
          ))}
        </div>

        {/* Feedback Button */}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <button
            onClick={() => navigate("/feedback")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#dcd0b5",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Give Feedback
          </button>
        </div>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#dcd0b5",
            color: "#000",
            textAlign: "center",
            padding: "15px 10px",
            fontSize: "0.9rem",
            borderRadius: "8px",
          }}
        >
          &copy; 2025 LMS Platform. All Rights Reserved. | Designed and Maintained by LMS Team
        </footer>
      </div>
    </div>
  );
}

export default Home;