import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-area">
          <div className="logo-icon">
            <span className="logo-icon-text"></span>
          </div>
          <div className="logo-text">
            <div className="logo-title">ComponentHub</div>
            <div className="logo-subtitle">开源组件发布平台</div>
          </div>
        </div>
        <div className="search-box">
          <div className="search-input-container">
            <span className="search-icon"></span>
            <input 
              type="text" 
              placeholder="搜索组件、关键词或作者..." 
              className="search-input"
            />
          </div>
        </div>
        <div className="user-area">
          <button className="publish-button">发布组件</button>
          <div className="user-avatar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;