import React, { useState } from 'react';
import { IoLogoChrome } from "react-icons/io";
import { BsFillQuestionSquareFill, BsClipboard2CheckFill } from "react-icons/bs";
import { RiBookletFill } from "react-icons/ri";
import { TbGraphFilled } from "react-icons/tb";
import { FaChevronRight, FaFileUpload,  FaUserCircle } from "react-icons/fa";
import './sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FaChevronRight className={`toggle-icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      <div className="top-section" >
        <div className="wrapper mindgrades">
          <IoLogoChrome className="logo" size={24} />
          <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>MindGrades</span>
        </div>
        <div className="nav-items">
            <div className="wrapper questions">
                <BsFillQuestionSquareFill className="nav-icon"/>
                <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>Questions</span>
            </div>
            <div className="wrapper tests">
             <BsClipboard2CheckFill className="nav-icon"/>
                <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>Tests</span>
            </div>
            <div className="wrapper notes">
                <RiBookletFill className="nav-icon"/>
                <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>Notes</span>
            </div>
            <div className="wrapper score">
                <TbGraphFilled className="nav-icon"/>
                <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>Score</span>
            </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="wrapper">
            <FaFileUpload className="nav-icon upload"/>
            <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>Upload</span>
        </div>
        <div className="wrapper">
          <FaUserCircle className="nav-icon user"/>
          <span style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>User</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
