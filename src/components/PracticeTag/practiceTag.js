import React from 'react';
import './practiceTag.css';
import { FaFire } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

const PracticeTag = () => {
  const tags = [
    "Interview", "Newspaper", "Economics", "Sociology", "Indian History",
    "Articles", "Strategy", "Geography", "International Relations", "Polity"
  ];

  return (
    <div className="tag-search-container">
      <div className="banner">
        <FaFire className="banner-img"/>
        <div className="banner-content">
          <h5>Achieve Your Goals with Keep</h5>
          <h5>The Streak Alive</h5>
          <button className="banner-btn">Start Practicing</button>
        </div>
      </div>

      <div className="tags-section">
        <h3>Tags</h3>
        <div className="search-box">
          <CiSearch className="search-logo" />
          <input type="text" placeholder="Search for tag" />
        </div>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <button key={index} className="tag-btn">{tag}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeTag;
