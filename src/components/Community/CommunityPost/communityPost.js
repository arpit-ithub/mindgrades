import React from 'react';
import './communityPost.css';
import { HiEye } from "react-icons/hi2";
import { LuArrowUpSquare, LuArrowDownSquare } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";

const CommunityPost = () => {
  return (
    <div className="community-post">
      <div className="post-header">
        <div className="post-avatar">A</div>
        <div className="post-info">
          <div className="post-author">Rahul Singh</div>
          <div className="post-time">2 hours ago</div>
        </div>
        <div className="post-stats">
          <span className="post-views"><HiEye /> 125</span>
        </div>
      </div>
      <div className="post-content">
        <div className="post-title">
          <span className="dot"></span> Preparation Strategy
        </div>
        <div className="post-body">
          Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum.
        </div>
      </div>
      <div className="post-footer">
        <div className="post-actions">
          <span><LuArrowUpSquare className="post-icons"/> 100</span>
          <span><LuArrowDownSquare className="post-icons" /> 13</span>
          <span><BiMessageAltDetail className="post-icons" /> 25</span>
          <span className="post-minute">New comment 5 min ago</span>
        </div>
        <div className="post-tags">
          <span className="tag">Strategy</span>
          <span className="tag">Preparation</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
