import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar" style={{ height: '150vh' }}>
      <NavLink exact to="/homepage" activeClassName="side-active" className="sidebar-link">
        Blog
      </NavLink>
      <NavLink to="/video" activeClassName="side-active" className="sidebar-link">
        Video
      </NavLink>
      <NavLink to="/qna" activeClassName="side-active" className="sidebar-link">
        Q&A
      </NavLink>
    </div>
  );
};

export default Sidebar;
