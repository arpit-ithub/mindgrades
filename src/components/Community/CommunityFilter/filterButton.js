import React from 'react';
import './filterButton.css';
import { PiNotePencilDuotone } from "react-icons/pi";

const FilterButtons = () => {
  return (
    <div className="filter-buttons">
      <button className="filter-btn">All</button>
      <button className="filter-btn">Preparation Strategy</button>
      <button className="filter-btn">Interview Experience</button>
      <button className="write-btn"><PiNotePencilDuotone />Write</button>
    </div>
  );
};

export default FilterButtons;
