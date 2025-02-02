import React from "react";
import "../Dashboard.css";

import { DragEvent, useState } from "react";
const Dashboard = () => {
  const [file, setFile] = useState<string>("");
  const [context, setContext] = useState<string>("");

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [dragIsOver, setDragIsOver] = useState(false);

  // Define the event handlers for drag drop
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
    const droppedFiles = Array.from(event.dataTransfer.files);

    if (droppedFiles.length > 0) {
      const file = droppedFiles[0]; // Get the first file
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFile(base64String); // Store Base64-encoded string for the backend
        //console.log("Base64 Encoded Image:", base64String);
      };

      reader.onerror = () => {
        console.error("There was an issue reading the file.");
      };

      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  return (
    <body>
      <div className="bg2">
        <div className="bento-container">
          <div className="bento-item large upload-frame" id="uploadFrame">
            Generated Recipies
            <p>API CALL TEXT GOES HERE</p>
          </div>

          <div className="bento-grid">
            <div className="bento-item small upload-frame" id="uploadFrame">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                  width: "300px",
                  border: "1px dotted",
                  backgroundColor: dragIsOver ? "lightgray" : "white",
                }}
              >
                Drag and drop some files here
              </div>
              <button
                style={{ margin: 10, width: 350, height: 45 }}
                className="typewriter"
              >
                Click Me Once Everything Is Done
              </button>
            </div>

            <div className="bento-item small upload-frame" id="uploadFrame">
              Allergens and Dislikes
              <input
                type="text"
                id="dislikes"
                placeholder="Context"
                required
                value={context}
                onChange={(e) => setContext(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;
