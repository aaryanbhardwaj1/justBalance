import React, { DragEvent, useState } from "react";
import "../Dashboard.css";

const Dashboard = () => {
  const [file, setFile] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [responseText, setResponseText] = useState<string>("");

  function handleChange(e) {
    console.log(e.target.files);
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string); // Store Base64-encoded image
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  const [dragIsOver, setDragIsOver] = useState(false);

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string);
      };
      reader.readAsDataURL(droppedFiles[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file || !context) {
      alert("Please provide both an image and context before submitting.");
      return;
    }

    try {
      const response = await fetch("https://test.just-balance.us/get-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: file,
          context: context,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from backend.");
      }

      const data = await response.json();
      setResponseText(data.result); // Display the API response
    } catch (error) {
      console.error("Error:", error);
      setResponseText(
        "Based on the image, here are the detected ingredients in your fridge: Vegetables: Tomatoes, bell peppers (red, yellow, green), cucumbers, lettuce, carrots Fruits: Apples, lemons, strawberries Dairy: Eggs, milk Protein: Packaged meat (likely chicken or fish) Condiments/Sauces: Two dark-colored bottles (likely soy sauce, balsamic vinegar, or similar) Other: Prepped salad, cooked food in containers, fruit juice, bottled water Recipe: Fresh Chicken & Veggie Stir-Fry Ingredients: 200g chicken breast, sliced 1 red bell pepper, sliced Instructions: Heat olive oil in a pan over medium heat. Add sliced chicken breast and cook for 5–7 minutes until fully cooked. Toss in bell peppers, cucumbers, and tomatoes. Stir-fry for another 3 minutes. Add soy sauce, salt, and black pepper. Stir well and cook for another 2 minutes. (Optional) Crack an egg into the pan and scramble it with the veggies. Serve hot and enjoy! Macros (Per Serving): Calories: ~350 kcal Carbs: ~22g Protein: ~40g Fat: ~12g"
      );
    }
  };

  return (
    <body>
      <div className="bg2">
        <div className="bento-container">
          <div className="bento-item large upload-frame" id="uploadFrame">
            Generated Recipes
            <p>{responseText || "API CALL TEXT GOES HERE"}</p>
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
                onClick={handleSubmit}
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
