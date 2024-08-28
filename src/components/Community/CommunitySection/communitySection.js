import React from 'react';
import './communitySection.css';
import FilterButtons from '../CommunityFilter/filterButton';
import CommunityPost from '../CommunityPost/communityPost';

const Community = () => {
  return (
    <div className="community-container">
      <h2>Community</h2>
      <FilterButtons />
      <div className="community-posts">
        <CommunityPost />
        <CommunityPost />
      </div>
    </div>
  );
};

export default Community;
