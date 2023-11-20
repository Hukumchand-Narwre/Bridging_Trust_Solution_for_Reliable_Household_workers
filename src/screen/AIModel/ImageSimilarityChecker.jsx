import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import axios from "axios";
import Button from "../../UI/Button";
import Heading from "../../UI/Heading";

function ImageSimilarityChecker({ referenceImage, imageUrls }) {
  imageUrls = imageUrls
    .map((image) => {
      if (image.startsWith("url")) {
        return null;
      } else {
        return image;
      }
    })
    .filter((image) => image != null);
  const [model, setModel] = useState(null);

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
          imageUrls.shift();
          imageUrls.shift();
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
  console.log(bestMatchUrl, bestSimilarity);

  return (
    <div>
      {model ? (
        <div className="flex flex-col items-center ">
          <Button className="mt-12" onClick={handleReferenceImageSubmit}>
            Check for Matching Images
          </Button>
          {bestMatchUrl && bestSimilarity > 0.9 && (
            <div className="flex flex-col items-center space-x-4">
              <div
                style={{ height: "14rem", width: "14rem" }}
                className="relative rounded-full overflow-hidden  ring-2 ring-blue-500 mt-12 "
              >
                <img src={bestMatchUrl} alt={`Profile photo of`} className="w-full h-full object-cover" />
              </div>
              <Heading as="h3" className="mt-12 ring-2 ring-blue-500 p-3">
                The Uploaded Image Is Most Similar To The Image
              </Heading>
            </div>
          )}
          {(!bestMatchUrl || bestSimilarity <= 0.9) && bestMatchUrl !== "" && (
            <Heading as="h3" className="mt-12 ring-2 ring-blue-500 p-3">
              The uploaded image does not match any image in the URL array.
            </Heading>
          )}
        </div>
      ) : (
        <p className="mt-4">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
          <span className="mt-12">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Loading model...</span>
        </p>
      )}
    </div>
  );
}

export default ImageSimilarityChecker;
