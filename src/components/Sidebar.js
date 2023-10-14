import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/blog" activeClassName="active" className="sidebar-link">
        Blog
      </NavLink>
      <NavLink to="/video" activeClassName="active" className="sidebar-link">
        Video
      </NavLink>
      <NavLink to="/qna" activeClassName="active" className="sidebar-link">
        Q&A
      </NavLink>
    </div>
  );
};

export default Sidebar;
