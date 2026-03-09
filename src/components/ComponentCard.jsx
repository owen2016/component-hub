import React from 'react';
import { Link } from 'react-router-dom';

const ComponentCard = ({ component }) => {
  return (
    <Link to={`/maven/${component.name.toLowerCase().replace(/\s+/g, '-')}`} className="component-card-link">
      <div className="component-card">
        <div className="card-header">
          <div className="component-title-area">
            <div className="component-name">{component.name}</div>
            <div className="component-version">{component.version}</div>
          </div>
          <div className="component-description">{component.description}</div>
        </div>
        <div className="card-content">
          <div className="repo-info">
            <span className="repo-label">代码仓库:</span>
            <span className="repo-url">{component.repo}</span>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-label">下载量:</span>
              <span className="stat-value">{component.downloads}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Stars:</span>
              <span className="stat-value">{component.stars}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="author-info">
            <span className="author-label">作者:</span>
            <span className="author-name">{component.author}</span>
          </div>
          <button className="view-button">查看详情</button>
        </div>
      </div>
    </Link>
  );
};

export default ComponentCard;