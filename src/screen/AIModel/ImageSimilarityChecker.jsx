import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import axios from "axios";

function ImageSimilarityChecker() {
  const [model, setModel] = useState(null);
  const [referenceImage, setReferenceImage] = useState("");
  const [imageUrls, setImageUrls] = useState([
    "https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy1JEG4x2UvTagSw1nlpYVRuckk0Tc3Gq-g&usqp=CAU",
  ]);

  const [bestMatchUrl, setBestMatchUrl] = useState("");
  const [bestSimilarity, setBestSimilarity] = useState(0);

  useEffect(() => {
    const loadModel = async () => {
      const net = await mobilenet.load();
      setModel(net);
    };

    loadModel();
  }, []);

  const handleReferenceImageSubmit = () => {
    if (!model) {
      console.error("Model not loaded yet.");
      return;
    }

    let bestSimilarityFound = 0;
    let bestMatchImageUrl = "";

    fetch(referenceImage)
      .then((response) => response.blob())
      .then(async (blob) => {
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        img.onload = async () => {
          const referenceEmbedding = await model.infer(img, true);

          for (const imageUrl of imageUrls) {
            const response = await axios.get(imageUrl, {
              responseType: "blob",
            });
            const newImg = new Image();
            newImg.src = URL.createObjectURL(new Blob([response.data]));
            await newImg.decode();
            const newEmbedding = await model.infer(newImg, true);

            const similarity = tf.losses.cosineDistance(referenceEmbedding, newEmbedding).dataSync()[0];

            if (1 - similarity > bestSimilarityFound) {
              bestSimilarityFound = 1 - similarity;
              bestMatchImageUrl = imageUrl;
            }
          }

          // Set the best match URL and similarity
          setBestMatchUrl(bestMatchImageUrl);
          setBestSimilarity(bestSimilarityFound);
        };
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  };

  return (
    <div>
      <h1>Image Matching Checker</h1>
      {model ? (
        <div>
          <input
            type="text"
            placeholder="Reference Image URL"
            value={referenceImage}
            onChange={(e) => setReferenceImage(e.target.value)}
          />
          <button onClick={handleReferenceImageSubmit}>Check for Matching Images</button>
        </div>
      ) : (
        <p>Loading model...</p>
      )}
      {bestMatchUrl && bestSimilarity > 0.9 && (
        <p>
          The uploaded image is most similar to the image at URL: {bestMatchUrl} (Similarity:{" "}
          {Math.round(bestSimilarity * 100)}%)
        </p>
      )}
      {(!bestMatchUrl || bestSimilarity <= 0.9) && bestMatchUrl !== "" && (
        <p>The uploaded image does not match any image in the URL array.</p>
      )}
    </div>
  );
}

export default ImageSimilarityChecker;
