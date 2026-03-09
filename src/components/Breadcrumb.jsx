import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <>
                <span className="breadcrumb-spacer"></span>
                <span className="breadcrumb-arrow"></span>
                <span className="breadcrumb-spacer"></span>
              </>
            )}
            {index === items.length - 1 ? (
              <span className="breadcrumb-item active">{item.label}</span>
            ) : (
              <Link to={item.path} className="breadcrumb-item">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;