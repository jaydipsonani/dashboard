import React from "react";
import "./css/Dashboard.css";
import salesIcon from '../../image/receipt-item.png';
import downloadIcon from '../../image/download-icon.png';

const Dashboard = () => {

  const stats = [
    { title: 'SALES', value: '$100', icon: salesIcon },
           { title: 'SALES', value: '$100', icon: salesIcon },
             { title: 'SALES', value: '$100', icon: salesIcon },
             { title: 'SALES', value: '$100', icon: salesIcon },
            { title: 'SALES', value: '$100', icon: salesIcon },
             { title: 'SALES', value: '$100', icon: salesIcon },
            { title: 'SALES', value: '$100', icon: salesIcon },
            { title: 'SALES', value: '$100', icon: salesIcon },
             { title: 'SALES', value: '$100', icon: salesIcon }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <hr className="divider" />
      <div className="dashboard-controls">
        <nav className="dashboard-nav">
          <button>ALL</button>
          <button>Today</button>
          <button>This Week</button>
          <button className="active">This Month</button>
          <button>This Year</button>
        </nav>
        <button className="download-button">
          <img src={downloadIcon} alt="Download" />
          <span>Download</span>
        </button>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="box">
            <div className="image">
              <img src={stat.icon} alt={stat.title} />
            </div>
            <div className="box-content">
              <h6>{stat.title}</h6>
              <h5>{stat.value}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
