import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";
import Login from "./Login";
import Search from "./Search";
import Dashboard from "./Dashboard";
import Feedback from "./Feedback";
import image from "./assets/image.png";
import MyBooks from "./MyBooks";
import Favorites from "./Favorites";

// Import all detail pages here...
// Example:
import Story1Detail from "./Story1Detail";
import Story2Detail from "./Story2Detail";
import Story3Detail from "./Story3Detail";
import Story4Detail from "./Story4Detail";
import Story5Detail from "./Story5Detail";
import Story6Detail from "./Story6Detail";
import Story7Detail from "./Story7Detail";
import Story8Detail from "./Story8Detail";
import Story9Detail from "./Story9Detail";

import Trending1Detail from "./Trending1Detail";
import Trending2Detail from "./Trending2Detail";
import Trending3Detail from "./Trending3Detail";
import Trending4Detail from "./Trending4Detail";
import Trending5Detail from "./Trending5Detail";
import Trending6Detail from "./Trending6Detail";
import Trending7Detail from "./Trending7Detail";
import Trending8Detail from "./Trending8Detail";
import Trending9Detail from "./Trending9Detail";
import Trending10Detail from "./Trending10Detail";
import Trending11Detail from "./Trending11Detail";
import Trending12Detail from "./Trending12Detail";
import Trending13Detail from "./Trending13Detail";
import Trending14Detail from "./Trending14Detail";
import Trending15Detail from "./Trending15Detail";
import Trending16Detail from "./Trending16Detail";
import Trending17Detail from "./Trending17Detail";
import Trending18Detail from "./Trending18Detail";
import Trending19Detail from "./Trending19Detail";
import UPSC1Detail from "./UPSC1Detail";
import UPSC2Detail from "./UPSC2Detail";
import UPSC3Detail from "./UPSC3Detail";
import UPSC4Detail from "./UPSC4Detail";
import UPSC5Detail from "./UPSC5Detail";
import UPSC6Detail from "./UPSC6Detail";
import UPSC7Detail from "./UPSC7Detail";
import UPSC8Detail from "./UPSC8Detail";
import UPSC9Detail from "./UPSC9Detail";
import UPSC10Detail from "./UPSC10Detail";
import UPSC11Detail from "./UPSC11Detail";
import UPSC12Detail from "./UPSC12Detail";
import UPSC13Detail from "./UPSC13Detail";
import UPSC14Detail from "./UPSC14Detail";
import UPSC15Detail from "./UPSC15Detail";

import General1Detail from "./General1Detail";
import General2Detail from "./General2Detail";
import General3Detail from "./General3Detail";
import General4Detail from "./General4Detail";
import General5Detail from "./General5Detail";
import General6Detail from "./General6Detail";
import General7Detail from "./General7Detail";
import General8Detail from "./General8Detail";
import General9Detail from "./General9Detail";
import General10Detail from "./General10Detail";
import General11Detail from "./General11Detail";
import General12Detail from "./General12Detail";
import General13Detail from "./General13Detail";
import General14Detail from "./General14Detail";
import General15Detail from "./General15Detail";

import Text1Detail from "./Text1Detail";
import Text2Detail from "./Text2Detail";
import Text3Detail from "./Text3Detail";
import Text4Detail from "./Text4Detail";
import Text5Detail from "./Text5Detail";
import Text6Detail from "./Text6Detail";
import Text7Detail from "./Text7Detail";
import Text8Detail from "./Text8Detail";
import Text9Detail from "./Text9Detail";
import Text10Detail from "./Text10Detail";
import Text11Detail from "./Text11Detail";
import Text12Detail from "./Text12Detail";
import Text13Detail from "./Text13Detail";
import Text14Detail from "./Text14Detail";
import Text15Detail from "./Text15Detail";
import Text16Detail from "./Text16Detail";
import Text17Detail from "./Text17Detail";
import Text18Detail from "./Text18Detail";
import Text19Detail from "./Text19Detail";
import Text20Detail from "./Text20Detail";
import Text21Detail from "./Text21Detail";
import Text22Detail from "./Text22Detail";
import Text23Detail from "./Text23Detail";
import Text24Detail from "./Text24Detail";
import Text25Detail from "./Text25Detail";

import Public1Detail from "./Public1Detail";
import Public2Detail from "./Public2Detail";
import Public3Detail from "./Public3Detail";
import Public4Detail from "./Public4Detail";
import Public5Detail from "./Public5Detail";
import Public6Detail from "./Public6Detail";
import Public7Detail from "./Public7Detail";
import Public8Detail from "./Public8Detail";
import Public9Detail from "./Public9Detail";
import Public10Detail from "./Public10Detail";
import Public11Detail from "./Public11Detail";
import Public12Detail from "./Public12Detail";
import Public13Detail from "./Public13Detail";
import Public14Detail from "./Public14Detail";
import Public15Detail from "./Public15Detail";
import Public16Detail from "./Public16Detail";
import Public17Detail from "./Public17Detail";
import Public18Detail from "./Public18Detail";

import Anicent1Detail from "./Anicent1Detail";
import Anicent2Detail from "./Anicent2Detail";
import Anicent3Detail from "./Anicent3Detail";
import Anicent4Detail from "./Anicent4Detail";
import Anicent5Detail from "./Anicent5Detail";
import Anicent6Detail from "./Anicent6Detail";
import Anicent7Detail from "./Anicent7Detail";
import Anicent8Detail from "./Anicent8Detail";
import Anicent9Detail from "./Anicent9Detail";
import Anicent10Detail from "./Anicent10Detail";

import Literature1Detail from "./Literature1Detail";
import Literature2Detail from "./Literature2Detail";
import Literature3Detail from "./Literature3Detail";
import Literature4Detail from "./Literature4Detail";
import Literature5Detail from "./Literature5Detail";
import Literature6Detail from "./Literature6Detail";
import Literature7Detail from "./Literature7Detail";
import Literature8Detail from "./Literature8Detail";
import Literature9Detail from "./Literature9Detail";
import Literature10Detail from "./Literature10Detail";
import Literature11Detail from "./Literature11Detail";
import Literature12Detail from "./Literature12Detail";
import Literature13Detail from "./Literature13Detail";
import Literature14Detail from "./Literature14Detail";
import Literature15Detail from "./Literature15Detail";
import Literature16Detail from "./Literature16Detail";
import Literature17Detail from "./Literature17Detail";
import Literature18Detail from "./Literature18Detail";
import Literature19Detail from "./Literature19Detail";
import Literature20Detail from "./Literature20Detail";
import Literature21Detail from "./Literature21Detail";
import Literature22Detail from "./Literature22Detail";
import Literature23Detail from "./Literature23Detail";
import Literature24Detail from "./Literature24Detail";

import Classic1Detail from "./Classic1Detail";
import Classic2Detail from "./Classic2Detail";
import Classic3Detail from "./Classic3Detail";
import Classic4Detail from "./Classic4Detail";
import Classic5Detail from "./Classic5Detail";
import Classic6Detail from "./Classic6Detail";
import Classic7Detail from "./Classic7Detail";
import Classic8Detail from "./Classic8Detail";
import Classic9Detail from "./Classic9Detail";
import Classic10Detail from "./Classic10Detail";
import Classic11Detail from "./Classic11Detail";
import Classic12Detail from "./Classic12Detail";
import Classic13Detail from "./Classic13Detail";
import Classic14Detail from "./Classic14Detail";
import Classic15Detail from "./Classic15Detail";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(savedLogin);
  }, []);

  return (
    <Router>
      <PageContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

function PageContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div style={{ overflowX: "hidden" }}>
      {!hideNavbar && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: hideNavbar ? "#fafafa" : "#f4f1ea",
          padding: "20px",
          transition: "background 0.3s ease",
          boxSizing: "border-box",
                    /* 🔥 Make text ALWAYS black */
  color: "black",
  /* 🔒 Prevent dark mode from changing text color */
  colorScheme: "light",
        }}
      >
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/MyBooks" element={<MyBooks />} />
          <Route path="/Favorites" element={<Favorites />} />



          {/* Auth pages */}
          <Route
            path="/register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
{/* Example detail page */}
          <Route path="/story1" element={<Story1Detail />} />
          <Route path="/story2" element={<Story2Detail />} />
          <Route path="/story3" element={<Story3Detail />} />
          <Route path="/story4" element={<Story4Detail />} />
          <Route path="/story5" element={<Story5Detail />} />
          <Route path="/story6" element={<Story6Detail />} />
          <Route path="/story7" element={<Story7Detail />} />
          <Route path="/story8" element={<Story8Detail />} />
          <Route path="/story9" element={<Story9Detail />} />

          {/* Add all other detail pages similarly */}
          <Route path="/Trending1" element={<Trending1Detail />} />
          <Route path="/Trending2" element={<Trending2Detail />} />
          <Route path="/Trending3" element={<Trending3Detail />} />
          <Route path="/Trending4" element={<Trending4Detail />} />
          <Route path="/Trending5" element={<Trending5Detail />} />
          <Route path="/Trending6" element={<Trending6Detail />} />
          <Route path="/Trending7" element={<Trending7Detail />} />
          <Route path="/Trending8" element={<Trending8Detail />} />
          <Route path="/Trending9" element={<Trending9Detail />} />
          <Route path="/Trending10" element={<Trending10Detail />} />
          <Route path="/Trending11" element={<Trending11Detail />} />
          <Route path="/Trending12" element={<Trending12Detail />} />
          <Route path="/Trending13" element={<Trending13Detail />} />
          <Route path="/Trending14" element={<Trending14Detail />} />
          <Route path="/Trending15" element={<Trending15Detail />} />
          <Route path="/Trending16" element={<Trending16Detail />} />
          <Route path="/Trending17" element={<Trending17Detail />} />
          <Route path="/Trending18" element={<Trending18Detail />} />
          <Route path="/Trending19" element={<Trending19Detail />} />


          <Route path="/UPSC1" element={<UPSC1Detail />} />
          <Route path="/UPSC2" element={<UPSC2Detail />} />
          <Route path="/UPSC3" element={<UPSC3Detail />} />
          <Route path="/UPSC4" element={<UPSC4Detail />} />
          <Route path="/UPSC5" element={<UPSC5Detail />} />
          <Route path="/UPSC6" element={<UPSC6Detail />} />
          <Route path="/UPSC7" element={<UPSC7Detail />} />
          <Route path="/UPSC8" element={<UPSC8Detail />} />
          <Route path="/UPSC9" element={<UPSC9Detail />} />
          <Route path="/UPSC10" element={<UPSC10Detail />} />
          <Route path="/UPSC11" element={<UPSC11Detail />} />
          <Route path="/UPSC12" element={<UPSC12Detail />} />
          <Route path="/UPSC13" element={<UPSC13Detail />} />
          <Route path="/UPSC14" element={<UPSC14Detail />} />
          <Route path="/UPSC15" element={<UPSC15Detail />} />

           <Route path="/General1" element={<General1Detail />} />
          <Route path="/General2" element={<General2Detail />} />
          <Route path="/General3" element={<General3Detail />} />
          <Route path="/General4" element={<General4Detail />} />
          <Route path="/General5" element={<General5Detail />} />
          <Route path="/General6" element={<General6Detail />} />
          <Route path="/General7" element={<General7Detail />} />
          <Route path="/General8" element={<General8Detail />} />
          <Route path="/General9" element={<General9Detail />} />
          <Route path="/General10" element={<General10Detail />} />
          <Route path="/General11" element={<General11Detail />} />
          <Route path="/General12" element={<General12Detail />} />
          <Route path="/General13" element={<General13Detail />} />
          <Route path="/General14" element={<General14Detail />} />
          <Route path="/General15" element={<General15Detail />} />

          <Route path="/Text1" element={<Text1Detail />} />
          <Route path="/Text2" element={<Text2Detail />} />
          <Route path="/Text3" element={<Text3Detail />} />
          <Route path="/Text4" element={<Text4Detail />} />
          <Route path="/Text5" element={<Text5Detail />} />
          <Route path="/Text6" element={<Text6Detail />} />
          <Route path="/Text7" element={<Text7Detail />} />
          <Route path="/Text8" element={<Text8Detail />} />
          <Route path="/Text9" element={<Text9Detail />} />
          <Route path="/Text10" element={<Text10Detail />} />
          <Route path="/Text11" element={<Text11Detail />} />
          <Route path="/Text12" element={<Text12Detail />} />
          <Route path="/Text13" element={<Text13Detail />} />
          <Route path="/Text14" element={<Text14Detail />} />
          <Route path="/Text15" element={<Text15Detail />} />
          <Route path="/Text16" element={<Text16Detail />} />
          <Route path="/Text17" element={<Text17Detail />} />
          <Route path="/Text18" element={<Text18Detail />} />
          <Route path="/Text19" element={<Text19Detail />} />
          <Route path="/Text20" element={<Text20Detail />} />
          <Route path="/Text21" element={<Text21Detail />} />
          <Route path="/Text22" element={<Text22Detail />} />
          <Route path="/Text23" element={<Text23Detail />} />
          <Route path="/Text24" element={<Text24Detail />} />
          <Route path="/Text25" element={<Text25Detail />} />

          <Route path="/Public1" element={<Public1Detail />} />
          <Route path="/Public2" element={<Public2Detail />} />
          <Route path="/Public3" element={<Public3Detail />} />
          <Route path="/Public4" element={<Public4Detail />} />
          <Route path="/Public5" element={<Public5Detail />} />
          <Route path="/Public6" element={<Public6Detail />} />
          <Route path="/Public7" element={<Public7Detail />} />
          <Route path="/Public8" element={<Public8Detail />} />
          <Route path="/Public9" element={<Public9Detail />} />
          <Route path="/Public10" element={<Public10Detail />} />
          <Route path="/Public11" element={<Public11Detail />} />
          <Route path="/Public12" element={<Public12Detail />} />
          <Route path="/Public13" element={<Public13Detail />} />
          <Route path="/Public14" element={<Public14Detail />} />
          <Route path="/Public15" element={<Public15Detail />} />
          <Route path="/Public16" element={<Public16Detail />} />
          <Route path="/Public17" element={<Public17Detail />} />
          <Route path="/Public18" element={<Public18Detail />} />

          <Route path="/Anicent1" element={<Anicent1Detail />} />
          <Route path="/Anicent2" element={<Anicent2Detail />} />
          <Route path="/Anicent3" element={<Anicent3Detail />} />
          <Route path="/Anicent4" element={<Anicent4Detail />} />
          <Route path="/Anicent5" element={<Anicent5Detail />} />
          <Route path="/Anicent6" element={<Anicent6Detail />} />
          <Route path="/Anicent7" element={<Anicent7Detail />} />
          <Route path="/Anicent8" element={<Anicent8Detail />} />
          <Route path="/Anicent9" element={<Anicent9Detail />} />
          <Route path="/Anicent10" element={<Anicent10Detail />} />
          
          <Route path="/Literature1" element={<Literature1Detail />} />
          <Route path="/Literature2" element={<Literature2Detail />} />
          <Route path="/Literature3" element={<Literature3Detail />} />
          <Route path="/Literature4" element={<Literature4Detail />} />
          <Route path="/Literature5" element={<Literature5Detail />} />
          <Route path="/Literature6" element={<Literature6Detail />} />
          <Route path="/Literature7" element={<Literature7Detail />} />
          <Route path="/Literature8" element={<Literature8Detail />} />
          <Route path="/Literature9" element={<Literature9Detail />} />
          <Route path="/Literature10" element={<Literature10Detail />} />
          <Route path="/Literature11" element={<Literature11Detail />} />
          <Route path="/Literature12" element={<Literature12Detail />} />
          <Route path="/Literature13" element={<Literature13Detail />} />
          <Route path="/Literature14" element={<Literature14Detail />} />
          <Route path="/Literature15" element={<Literature15Detail />} />
          <Route path="/Literature16" element={<Literature16Detail />} />
          <Route path="/Literature17" element={<Literature17Detail />} />
          <Route path="/Literature18" element={<Literature18Detail />} />
          <Route path="/Literature19" element={<Literature19Detail />} />
          <Route path="/Literature20" element={<Literature20Detail />} />
          <Route path="/Literature21" element={<Literature21Detail />} />
          <Route path="/Literature22" element={<Literature22Detail />} />
          <Route path="/Literature23" element={<Literature23Detail />} />
          <Route path="/Literature24" element={<Literature24Detail />} />

          <Route path="/Classic1" element={<Classic1Detail />} />
          <Route path="/Classic2" element={<Classic2Detail />} />
          <Route path="/Classic3" element={<Classic3Detail />} />
          <Route path="/Classic4" element={<Classic4Detail />} />
          <Route path="/Classic5" element={<Classic5Detail />} />
          <Route path="/Classic6" element={<Classic6Detail />} />
          <Route path="/Classic7" element={<Classic7Detail />} />
          <Route path="/Classic8" element={<Classic8Detail />} />
          <Route path="/Classic9" element={<Classic9Detail />} />
          <Route path="/Classic10" element={<Classic10Detail />} />
          <Route path="/Classic11" element={<Classic11Detail />} />
          <Route path="/Classic12" element={<Classic12Detail />} />
          <Route path="/Classic13" element={<Classic13Detail />} />
          <Route path="/Classic14" element={<Classic14Detail />} />
          <Route path="/Classic15" element={<Classic15Detail />} />
          
          {/* Add all other detail routes similarly */}
        </Routes>
      </div>
    </div>
  );
}

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      const email = localStorage.getItem("userEmail") || "";
      setUserEmail(email);
    } else {
      setUserEmail("");
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");  // remove user email on logout
    navigate("/home");
    setDropdownOpen(false);
  };

  // ✅ Remove this line completely
// const userEmail = localStorage.getItem("userEmail");  

useEffect(() => {
  if (isLoggedIn) {
    const email = localStorage.getItem("userEmail") || "";
    setUserEmail(email);
  } else {
    setUserEmail("");
  }
}, [isLoggedIn]);

 // Replace with dynamic email if available

  // List of all items and their routes
  const allItems = [
  { name: "Amma diarylo Konni Pageelu", author: "Ravi Mantri", path: "/story1" },
  { name: "Chandamama Kathalu", author: "M.V.V. Satyanarayana", path: "/story2" },
  { name: "Tales of Panchatantra", author: "Pandit Vishnu Sharma", path: "/story3" },
  { name: "The Clever Fox",Publisher: "Inlka", path: "/story4" },
  { name: "The Cunning Fox",Publisher: "Shanti Publications", path: "/story5" },
  { name: "The Hare and The Tortoise",Publisher: "Sterling Publisher", path: "/story6" },
  { name: " An Honest Woodcutter",Publisher:"Shanti Publication", path: "/story7" },
  { name: "Tenali RamaKrishna",Publisher:"J P Publishers", path: "/story8" },
  { name: "Hitopadesha Kathalu",Publisher: "Tulika Publishers", path: "/story9" },
  { name: "Onyx Storm", author: "Rebecca Yarros", path: "/Trending1" },
  { name: "Atmosphere: A Love Story",Author:"Taylor Jenkins Reid", path: "/Trending2" },
  { name: " The Crash",Author: "Freida McFadden", path: "/Trending3" },
  { name: "Fearless", author: "Lauren Roberts", path: "/Trending4" },
  { name: "From Failure to Success", author: "Martin Meadows", path: "/Trending5" },
  { name: "The Silent Patient", author: " Alex Michaelides", path: "/Trending6" },
  { name: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", path: "/Trending7" },
  { name: "Atomic Habits", author: "James Clear", path: "/Trending8" },
  { name: "Your Name ", author: "Makoto Shinkai", path: "/Trending9" },
  { name: " Don't Believe Everything You Think: Why Your Thinking Is the Beginning & End of Suffering", author: "Joseph Nguyen", path: "/Trending10" },
  { name: "Alone", author: "Sharon A. Mitchell", path: "/Trending11" },
  { name: "A Good Girl's Guide to Murder", author: "Holly Jackson", path: "/Trending12" },
  { name: "The Cult Called Freedom House", author: "Stephanie Eveien", path: "/Trending13" },
  { name: "chik lit", author: "Kadali", path: "/Trending14" },
  { name: "The Book of Doors: A Novel", author: "Gareth Brown", path: "/Trending15" },
  { name: "The Art of Conscious Contentment: A Handbook for Meditation and Spiritual Freedom", author: "Jeff Carreira", path: "/Trending16" },
  { name: "Art of Being Alone: Loneliness Was My Cage Solitude Is My Home", author: "Joseph Nguyen", path: "/Trending17" },
  { name: "Fairies of the Flowers & Trees", author: "M Barker", path: "/Trending18" },
  { name: "Logic, In Three Books", author: "Stephanie Eveien", path: "/Trending19" },
  { name: "UPSC Civil Services Courseware for Preliminary and Main Examinations", author: "G.K. Publications (GKP) Ltd", path: "/UPSC1" },
  { name: "IFS Service Previous Years' Papers Solved (General English Paper-I: General Knowledge)", author: "R.Guptha", path: "/UPSC2" },
  { name: "UPSC Prelims Toolkit Topicwise PYQs (1200+) History of Modern India", author: "ForumIAS", path: "/UPSC3" },
  { name: "NCERT Summary Class 6-12 for UPSC & State PSC Civil Services", author: "DESHA", path: "/UPSC4" },
  { name: "UPSC Toppers", author: "Avinash Agarwal", path: "/UPSC5" },
  { name: "NCERT Books for UPSC", author: " Radeam & Ravi", path: "/UPSC6" },
  { name: "UPSC Syllabus Explained Micro Topics Listing Updated IAS 2022-23", author: "GSSCORE", path: "/UPSC7" },
  { name: "UPSC New Syllabus & Tips to Crack IAS Preliminary & Mains Exam with Rapid GK 2019 Ebook 3rd Edition", author: " DESHA", path: "/UPSC8" },
  { name: " Not Your Usual UPSC Civil Services Exam", author: "Aditya Bajpal", path: "/UPSC9" },
  { name: "UPSC1", author: "UPSC Expert", path: "/UPSC10" },
  { name: "How to Become IAS-IPS", author: "Deep", path: "/UPSC11" },
  { name: "UPSC IAS Prelims", author: "DISHA", path: "/UPSC12" },
  { name: "UPSC-CSE IAS Prelims", author: "Arihant", path: "/UPSC13" },
  { name: "Prelims Mains", author: "GSSCORE", path: "/UPSC14" },
  { name: "UPSC PYQ Analysis", author: "Avinash", path: "/UPSC15" },
  { name: "Advanced Objective General Knowledge 2025 (For All Competitive Examinations) ", author: "Dr. R. S. Aggarwal", path: "/General1" },
  { name: " General Knowledge (Telugu)", author: "Dr. R. S. Aggarwal", path: "/General2" },
  { name: "INDIA General Knowledge Picture Book for Kids", author: "Dr. R. S. Aggarwal", path: "/General3" },
  { name: "Advanced Objective General Knowledge 2025 for All Competitive Examinations", author: "Dr. R.S. Aggarwal", path: "/General4" },
  { name: "Manorama Yearbook 2022", author: "INDIA CHOPRA ", path: "/General5" },
  { name: "Competition Current Affairs Yearly 2020", author: " Rebecca Yarros", path: "/General6" },
  { name: "The General Theory of Employment, Interest, and Money", author: " John Maynard Keynes", path: "/General7" },
  { name: "The Most Powerful Idea in the World", author: " William Rosen", path: "/General8" },
  { name: "New Ideas From Dead Economists", author: "Todd C. Buchholz ", path: "/General9" },
  { name: "A History of India", author: "Hermann Kulke and Dietmar rothermund ", path: "/General10" },
  { name: "The Futures: The Rise of the Speculator and the Origins of the World's Biggest Markets", author: "Emily Lambert", path: "/General11" },
  { name: "Build Your Family Bank: A Winning Vision for Multigenerational Wealth", author: "Emily Griffiths-Hamilton ", path: "/General12" },
  { name: "India for Indians", author: " Chitta Ranjan Das ", path: "/General13" },
  { name: "Unreasonable Success and How to Achieve It", author: " Richard Koch ", path: "/General14" },
  { name: "The Penguin Political Dictionary", author: "Compiled by Walter Theimer", path: "/General15" },
  { name: "Greek Gods: The Gods and Goddesses ", author: "Patrick Auerbach", path: "/classic1" },
  { name: " The Tale of Genji ", author: "Murasaki Shikibu", path: "/classic3" },
  { name: "Classic Korean Tales: With Commentaries ", author: "Key-sook Choe", path: "/classic4" },
  { name: "Pride and Prejudice", author: "Jane Austen", path: "/classic5" },
  { name: "Wuthering Heights", author: "Emily Brontë", path: "/classic6" },
  { name: "The White Whale", author: "Moby Dick", path: "/classic7" },
  { name: "A Tale of Two Cities", author: "Charles Dickens ", path: "/classic8" },
  { name: "Les Misérables", author: " Victor Hugo", path: "/classic9" },
  { name: "The First Explorers", author: "Nigel Pavitt", path: "/classic10" },
  { name: "Madame Bovary", author: "Gustave Flaubert's", path: "/classic11" },
  { name: " Middlemarch", author: "George Eliot", path: "/classic12" },
  { name: "War and Peace", author: "Leo Tolstoy", path: "/classic13" },
  { name: "Charles Dickens", author: "David Copperfield ", path: "/classic14" },
  { name: "Beyond Light and Dark", author: "D.C. Tayal and Praveen Tayal", path: "/classic15" },
  { name: "Engineering Drawing", author: "N.D. Bhatt", path: "/Text1" },
  { name: "Electronics Engineering", author: "D.C. Tayal and Praveen Tayal", path: "/Text2" },
  { name: "Calculus", author: "C.H. Edwards and David E. Penney", path: "/Text3" },
  { name: "Electronics Engineering", author: "D.C. Tayal and Praveen Tayal", path: "/Text4" },
  { name: "Intermediate Mathematics 1-B", author: "Telugu Akademi Publications", path: "/Text5" },
  { name: "Social Studies Class 7", author: "Commissioner of School Education & State Project Director, Samagra Shiksha AP", path: "/Text6" },
  { name: "Nava Vasantham - 3 Telugu Textbook", author: "Vasundhara Publications", path: "/Text7" },
  { name: "Science Class 7", author: "The Government of Andhra Pradesh, Amaravati", path: "/Text8" },
  { name: "Mathematics Class 6", author: "Nirmala Perera", path: "/Text9" },
  { name: "A Textbook of Building Construction", author: "Dr.S.K.Sharma", path: "/Text10" },
  { name: "Mechanical Engineering", author: "Rasheed Ahmed Khan, Ali Hasan, and Ravinder Kumar Anand", path: "/Text11" },
  { name: "Engineering Graphics and Design, Second Edition", author: "Pradeep Jain, A.P. Gautam, Ankita Maheshwari", path: "/Text12" },
  { name: "A Textbook of Discrete Mathematics", author: "Dr. Swapan Kumar Sarkar, published by S. Chand", path: "/Text13" },
  { name: "Operating Systems (Decode)", author: "I. A. Dhotre", path: "/Text14" },
  { name: "Data Structures Second Edition", author: "A. Chitra,P.T. Rajan", path: "/Text15" },
  { name: "Data Structures Second Edition", author: "Rekha Raichal, Suresh K., Manjunatha S., and K. R. Viswa Jhananie", path: "/Text16" },
  { name: "DevOps 2024 Edition", author: "SIA(Spectrum All-in-One)", path: "/Text17" },
  { name: " Programming in C", author: "K.Shashidhar", path: "/Text18" },
  { name: "Object-Oriented Programming with JAVA", author: "M. T. Somashekara, D. S. Guru, and K. S. Manjunatha", path: "/Text19" },
  { name: "A Textbook of Building Construction", author: "Dr.S.K.Sharma", path: "/Text20" },
  { name: "Principles of Data Structures Using C and C++", author: "Vinu V. Das", path: "/Text21" },
  { name: "Computer Networks: A Systems Approach", author: "Larry L. Peterson and Bruce S. Davie.", path: "/Text22" },
  { name: "Advanced Software Engineering", author: "Dr. Ikvinderpal Singh", path: "/Text23" },
  { name: "OPERATING SYSTEM", author: "Abhishek Dadhich, Ajay Singh, and Ravy Bhumesh", path: "/Text24" },
  { name: "Physics for diploma Engineering students", author: "D.V.Mehta", path: "/Text25" },
  { name: "Authentic NCERT Summary Class 6-12", Publisher: "Disha Publication", path: "/Public1" },
  { name: "SSC Exams General Knowledge",Publisher: "SAFALTA SERIES", path: "/Public2" },
  { name: "The Indica Quiz Book", Publisher: "Nexus", path: "/Public3" },
  { name: "CSAT Solved Papers (2014-2024)", Publisher: "Knowledge India Publication and S. Chand", path: "/Public4" },
  { name: "SURA'S RRB (Railway Recruitment Board) Level-1 Posts Group D Exam Book in English Medium - Latest Updated Edition 2025", Publisher: "Sura College of Competition", path: "/Public5" },
  { name: "Railway 27000+ Facts Previous Years Question Bank (Saar Sangrah)", author: "Khan Sir", path: "/Public6" },
  { name: "IBPS Bank PO Common Written Examination (CWE) Success Master", author: "Arihant", path: "/Public7" },
  { name: "SURA'S RRB NTPC Non-Technical Popular Categories Preliminary exam guide book, published in 2019.", author: "V.V.K. Subburaj", path: "/Public8" },
  { name: "Teach Yourself Quantitative Aptitude", author: "Arun Sharma", path: "/Public9" },
  { name: " Insurance Exams Previous Years' Paper 2016-2018", author: "Adda247 Publications is the publisher, as indicated by the logo on the top left of the cover", path: "/Public10" },
  { name: "SURA'S RRB ALP Assistant Loco Pilot First Stage (CBT) Exam Guide", author: "VVK SUBBURAJ", path: "/Public11" },
  { name: "RRB: Assistant Loco Pilot (Technician) First Stage (CBT) Exam Guide", author: "VVK SUBBURAJ", path: "/Public12" },
  { name: "BANKING", author: "Divesh Mishra", path: "/Public13" },
  { name: "GATE 2025 Civil Engineering", author: "GKP", path: "/Public14" },
  { name: "GATE 2025 Electronic communication Engineering", author: "VVK SUBBURAJ", path: "/Public15" },
  { name: "ENGLISH FOR BANK EXAMS", author: "S chand", path: "/Public16" },
  { name: "ELEMENTARY & ADVANCED MATHEMATICS SSC", author: "VVK SUBBURAJ", path: "/Public17" },
  { name: " MASTER GUIDE GATE 2025 General Aptitude Practice Book", author: "P K Chaudhary", path: "/Public18" },
  { name: "Ram: Scion of Ikshvaku", author: " Amish Tripathi", path: "/Ancient1" },
  { name: "Indian tales", author: "Devdutt Pattanaik", path: "/Ancient2" },
  { name: "Bhagavad gita",Author:"sage ved vyasa", path: "/Ancient3" },
  { name: "Valmiki Ramayanam",Author:"Sage valmiki", path: "/Ancient4" },
  { name: "Legends of the Ancients", author: "Candy crum and michael anderle", path: "/Ancient5" },
  { name: "Blood of Ancients", author: "sara c.Roethle", path: "/Ancient6" },
  { name: "AThe Magnificent Book of Treasures", author: "stella caldwell", path: "/Ancient7" },
  { name: "Ancient Egypt", author: "Philip steele", path: "/Ancient8" },
  { name: "Ancient Greek philosphers", author: "Canterbury classics", path: "/Ancient9" },
  { name: "Wisdom of the Ancients", author: "Francis Bacon", path: "/Ancient10" },
  { name: "Death:An Inside story", author: "Sadhguru", path: "/Literature1" },
  { name: "A History of Indian Literature", author: "Maurice Winternitz", path: "/Literature2" },
  { name: "Makers of Indian literature", author: "A.N.kapoor & V.P Gupta & Mohini gupta", path: "/Literature3" },
  { name: "The women who ruled India", author: "Archana Garodia Gupta", path: "/Literature4" },
  { name: "Indian history &culture", author: "Dr.D.Durgaish", path: "/Literature5" },
  { name: "A History of Indian English literature", author: "M.k.Naik", path: "/Literature6" },
  { name: "Modern Indian literature : A panoramic glimpse", author: "krishna kripalani", path: "/Literature7" },
  { name: " indian literature in translation",Author: "Narains and Lakshmi narain agarwal", path: "/Literature8" },
  { name: "the history of indian literature",Author:"Albert friedrich weber", path: "/Literature9" },
  { name: "Islamic literatures of india",Author: "Annemarie schimmel", path: "/Literature10" },
  { name: "Indian Classical Literature",Author: "Deepali borthakur", path: "/Literature11" },
  { name: "indian English literature:contempoary perspectives",Author:"Dr.santoshkumar g.chauhan", path: "/Literature12" },
  { name: "indian literary criticism in English,critics,texts,issues",Author: "P.K.Rajan", path: "/Literature13" },
  { name: "new perspectives on indian literature in English",Author: "k.u.gangarde", path: "/Literature14" },
  { name: " post modern indian English literature",Author: "prof Dr.rajesh shulka", path: "/Literature15" },
  { name: "indian kavya literature,volume VIII",Author: "A.k.warder", path: "/Literature16" },
  { name: "Lkrishna in indian thoughts,literature and music",Author: "Mandira ghosh", path: "/Literature17" },
  { name: "Nyayadarshanam as undercurrent in indian literature",Author: "Dr.lakshmi Vijayan v.t", path: "/Literature18" },
  { name: "A goldmine of indian classical literature",Author:"prof.Dr.Akram hossain", path: "/Literature19" },
  { name: "tamil literature volume,fasc.1 of the series",Author: "kamil veith zvelebil", path: "/Literature20" },
  { name: "the parsi contribution to indian literature",Author: "coomi s.vevaina", path: "/Literature21" },
  { name: "A short history of indian literature",Author: "Ernest Philip horrwitz", path: "/Literature22" },
  { name: "images of india in literature in English",Author:"Maria Edelson", path: "/Literature23" },
  { name: "post modern indian English literature",Author: "prof Dr.rajesh shulka", path: "/Literature24" },
  // ...and so on
];


  // Filter suggestions as user types
 const handleSearchChange = (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  if (!query) {
    setSuggestions([]);
    return;
  }
const filteredItems = allItems.filter((item) =>
  item.name.toLowerCase().includes(query.toLowerCase()) ||
  (item.author && item.author.toLowerCase().includes(query.toLowerCase())) ||
  (item.Publisher && item.Publisher.toLowerCase().includes(query.toLowerCase()))
);

setSuggestions(filteredItems.slice(0, 5)); // show top 5 suggestions
};


  // Navigate when user selects a suggestion
  const handleSelectSuggestion = (item) => {
    setSearchQuery("");
    setSuggestions([]);
    navigate(item.path);
  };

  // Navigate on enter key
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const match = allItems.find(
      (item) => item.name.toLowerCase() === searchQuery.toLowerCase()
    ) || allItems.find((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      navigate(match.path);
    }

    setSearchQuery("");
    setSuggestions([]);
  };

return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#e6ddc4",
        padding: "15px 20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
          /* 🔥 Make text ALWAYS black */
  color: "black",
  /* 🔒 Prevent dark mode from changing text color */
  colorScheme: "light",
      }}
    >
      {/* Left: Logo + Main Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <img
          src={image}
          alt="image"
          style={{ width: "100px", height: "70px", objectFit: "contain" }}
        />
        <Link to="/home" style={navLinkStyle}>Home</Link>
        <Link to="/about" style={navLinkStyle}>About</Link>
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
      </div>

      {/* Right: Search bar + Profile/Login */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap", position: "relative" }}>
        {/* Search Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <input
            type="text"
            placeholder="Search for books, stories, etc..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
                style={{
  padding: "8px 12px",
  borderRadius: "4px 0 0 4px",
  border: "1px solid #ccc",
  outline: "none",
  width: "250px",

  /* 🔥 Make text ALWAYS black */
  color: "black",
  backgroundColor: "white",

  /* 🔒 Prevent dark mode from changing text color */
  colorScheme: "light",
}}
/>
        <button
            type="submit"
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderLeft: "none",
              borderRadius: "0 4px 4px 0",
              background: "#f0f0f0",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            🔍
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "38px",
                left: 0,
                width: "100%",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                zIndex: 10,
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectSuggestion(item)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Profile / Auth */}
        {isLoggedIn ? (
          <div style={{ position: "relative" }}>
            <FaUserCircle
              size={30}
              color="#333"
              style={{ cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "40px",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  borderRadius: "8px",
                  width: "200px",
                  maxWidth: "90vw",
                  zIndex: 10,
                  padding: "10px 0",
                  wordBreak: "break-word",
                }}
              >
                <div
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid #eee",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  {userEmail}
                </div>
                <Link to="/dashboard" style={dropdownItemStyle}>MY PROFILE</Link>
                <Link to="/MyBooks" style={dropdownItemStyle}>MY BOOKS</Link>
                <Link to="/Favorites" style={dropdownItemStyle}>FAVORITES</Link>
                <div onClick={handleLogout} style={{ ...dropdownItemStyle, cursor: "pointer" }}>SIGN-OUT</div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" style={navLinkStyle}>Login</Link>
            <Link to="/register" style={navLinkStyle}>Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}
// Styles
const navLinkStyle = {
  color: "#333",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "18px",
};

const dropdownItemStyle = {
  display: "block",
  padding: "10px 20px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "16px",
  borderBottom: "1px solid #eee",
};

export default App;