import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaList, FaSignOutAlt } from 'react-icons/fa';
import './css/AdminPanel.css';
import { Button } from 'react-bootstrap';

const AdminPanel = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { text: 'Dashboard', path: '/', icon: <FaTachometerAlt /> },
    { text: 'Successful List', path: '/successfull', icon: <FaList /> },
    { text: 'Failed List', path: '/failedlist', icon: <FaList /> },
    { text: 'Plans List', path: '/plans-list', icon: <FaList /> },
    { text: 'eSIM List', path: '/esim-list', icon: <FaList /> },
    { text: 'Users', path: '/users', icon: <FaList /> },
    { text: 'Cancel Request', path: '/cancel-request', icon: <FaList /> },
    { text: 'Support List', path: '/support-list', icon: <FaList /> },
    { text: 'Listing List', path: '/listing-list', icon: <FaList /> },
    { text: 'Deals List', path: '/deals-list', icon: <FaList /> },
    { text: 'Blog List', path: '/blog-list', icon: <FaList /> },
    { text: 'Popular', path: '/popular', icon: <FaList /> },
    { text: 'Settings', path: '/settings', icon: <FaList /> },
    { text: 'Coupon', path: '/coupon', icon: <FaList /> },
  ];

  return (
    <div className="admin-panel">
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div style={{textAlign:'center'}} className="logo">
          {isCollapsed ? '' :<img src={require(`../image/waosim-logo.png`)} alt="Logo" />}
        </div>
          <button onClick={toggleSidebar} className="toggle-btn">
            {isCollapsed ? '>' : <img src={require(`../image/Icon (Stroke).png`)} />}
          </button>
        <div className="menu">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.path}
              className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <div className="menu-item-icon">{item.icon}</div>
              {!isCollapsed && <span className="menu-item-text">{item.text}</span>}
            </Link>
          ))}
        </div>
        <div className="logout">
          <Link to="/logout" className="menu-item logout-btn">
            {!isCollapsed && <span className="menu-item-logout">Logout</span>}
          </Link>

        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

// const AdminPanelApp = () => (
//   <Router>
//     <Route path="/" component={AdminPanel}>
//       {/* Add your route components here */}
//     </Route>
//   </Router>
// );

export default AdminPanel;
