import React from "react";
import "../Dashboard.css";

const Dashboard = () => {
  return (
    <body>
      <div className="bg2">
        <div className="bento-container">
          <div className="bento-item large">
            Generated Recipes
            <h1>{/*Get the response from the api from here */}</h1>
          </div>

          <div className="bento-grid">
            <div className="bento-item small upload-frame" id="uploadFrame">
              Upload Image
              <p>Drag and drop your files here or click to select files</p>
              <input type="file" id="fileInput" multiple />
            </div>

            <div className="bento-item small upload-frame" id="uploadFrame">
              Allergens and Dislikes
              <input type="text" id="dislikes" />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;
