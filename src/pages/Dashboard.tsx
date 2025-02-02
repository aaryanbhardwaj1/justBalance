import React from "react";
import '../Dashboard.css'

const Dashboard = () => {
  return (

    <div className="bg">
    <div className="bento-container">
      <div className="bento-item large">Calendar</div>
      <div className="bento-grid">
        <div className="bento-item small">Upload Image</div>
        <div className="bento-item small">Recipes</div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
