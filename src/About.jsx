import React from "react";
import { Link } from "react-router-dom";

import modernLibrary from "./assets/modernlibrary.jpg";
import systems from "./assets/systems.jpg";

function About() {
  const imageStyle = {
    width: "60%",       // width remains
    maxHeight: "250px",  // reduced height
    objectFit: "cover",  // crop proportionally
    borderRadius: "10px",
    marginBottom: "20px",
  };

  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1>About Our LMS</h1>
      <div style={{ textAlign: "center" }}>
        <img src={modernLibrary} alt="Modern Library" style={imageStyle} />
      </div>
      <p>
        This Learning Management System (LMS) helps students and teachers connect,
        share resources, and manage learning efficiently. It provides a centralized
        platform to access study materials, collaborate on assignments, and track
        progress seamlessly.
      </p>

      <h2>📚 Library</h2>
      <div style={{ textAlign: "center" }}>
        <img src={systems} alt="Library Systems" style={imageStyle} />
      </div>
      <p>
        Our LMS integrates a <strong>digital library</strong> that gives students access
        to a wide range of resources including textbooks, journals, e-books, and
        reference materials. The library ensures that learning materials are available
        anytime, anywhere, supporting both academic and personal growth.
      </p>

      <h2>📝 Research Papers</h2>
      <p>
        For higher education and advanced studies, our LMS provides access to
        <strong> research papers</strong> across multiple disciplines. This feature
        helps students and researchers stay updated with the latest academic trends,
        innovations, and scholarly contributions.
      </p>

      <p style={{ marginTop: "20px" }}>
        Overall, our LMS is not just a learning tool but a <strong>complete academic
        ecosystem</strong> that supports education, research, and knowledge-sharing.
      </p>

      <Link to="/home" style={{ display: "inline-block", marginTop: "20px" }}>
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default About;