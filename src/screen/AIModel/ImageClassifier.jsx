import React, { useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

function ImageClassifier() {
  const [model, setModel] = useState(null);
  const [isHuman, setIsHuman] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const loadModel = async () => {
      const net = await cocoSsd.load();
      setModel(net);
    };

    loadModel();
  }, []);

  const handleImageUrlSubmit = () => {
    if (!model) {
      console.error("Model not loaded yet.");
      return;
    }

    fetch(imageUrl)
      .then((response) => response.blob())
      .then(async (blob) => {
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        img.onload = async () => {
          const predictions = await model.detect(img);
          console.log("Object detection result:", predictions);

          const isHuman = predictions.some((item) => item.class === "person" || item.class === "human");
          setIsHuman(isHuman);
        };
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  };

  return (
    <div>
      <h1>Human Image Detector</h1>
      {model ? (
        <div>
          <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <button onClick={handleImageUrlSubmit}>Detect Humans from URL</button>
        </div>
      ) : (
        <p>Loading model...</p>
      )}
      {isHuman !== null && <p>{isHuman ? "This is a human image." : "This is not a human image."}</p>}
    </div>
  );
}

export default ImageClassifier;
