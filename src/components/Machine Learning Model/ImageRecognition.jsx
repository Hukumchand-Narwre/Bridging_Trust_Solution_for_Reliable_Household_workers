import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import trainModel from "./traning";

function ImageRecognition() {
  const [image, setImage] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Load the model when the component is mounted
    loadModel();
  }, []);

  const loadModel = async () => {
    await trainModel();
    // const loadedModel = await tf.loadLayersModel("https://drive.google.com/file/d/1hSiIcQJQV5MYzXBxhh0JxrEoGSONTi2o/view?usp=sharing"); // Load model from the root directory
    //const modelUrl = import.meta.env.BASE_URL + "/public/my-model.json"; // Adjust the path as needed
    //const loadedModel = await tf.loadLayersModel(modelUrl);
    const loadedModel = await tf.loadLayersModel("indexeddb://my-model");
    console.log("run");
    console.log(loadModel);
    if (loadedModel) {
      setModel(loadedModel);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    predict(model, imageUrl); // Call predict with the loaded model
  };

  // const predict = async (model, imageUrl) => {
  //   const imageElement = new Image();

  //   imageElement.onload = async () => {
  //     const image = tf.browser.fromPixels(imageElement);
  //     const processedImage = tf.tidy(() => image.expandDims(0).toFloat().div(255.0));

  //     const predictions = model.predict(processedImage);
  //     const predictionArray = Array.from(predictions.dataSync());
  //     // Process the predictions and display the results
  //     console.log(predictionArray);
  //   };

  //   imageElement.onerror = (error) => {
  //     console.error("Image loading error:", error);
  //   };

  //   imageElement.src = imageUrl;
  // };

  const predict = async (model, imageUrl) => {
    const imageElement = new Image();

    imageElement.onload = async () => {
      const image = tf.browser.fromPixels(imageElement);

      // Resize the input image to match the model's expected shape (28x28)
      const resizedImage = tf.image.resizeBilinear(image, [28, 28]);

      // Convert the image to grayscale (assuming the model expects grayscale)
      const grayscaleImage = tf.image.rgbToGrayscale(resizedImage);

      // Normalize the pixel values (assuming pixel values are in the range [0, 255])
      const normalizedImage = grayscaleImage.toFloat().div(255.0);

      const processedImage = normalizedImage.expandDims(0); // Add batch dimension

      const predictions = model.predict(processedImage);
      const predictionArray = Array.from(predictions.dataSync());
      // Process the predictions and display the results
      console.log(predictionArray);
    };

    imageElement.onerror = (error) => {
      console.error("Image loading error:", error);
    };

    imageElement.src = imageUrl; // Load the image
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Recognition Image" />}
    </div>
  );
}

export default ImageRecognition;
