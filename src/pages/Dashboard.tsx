import React from "react";
import '../Dashboard.css'

const Dashboard = () => {
  return (

    <body>
      <div className="bg2">
        <div className="bento-container">
          <div className="bento-item large">Generated Recipes</div>
          <div className="bento-grid">
            <div className="bento-item small upload-frame" id="uploadFrame">Upload Image
              <p>Drag and drop your files here or click to select files</p>
              <input type="file" id="fileInput" multiple />
            </div>
            <div className="bento-item small">Missing Ingredients

            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;
