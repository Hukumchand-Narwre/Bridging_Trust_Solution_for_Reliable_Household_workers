import * as tf from "@tensorflow/tfjs";

// Define your image URLs and labels
const url1 =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais"
  );

const url2 =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://img.freepik.com/free-photo/front-view-man-with-nose-ring_23-2149441219.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais"
  );

const url3 =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg");

const url4 =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://thumbs.dreamstime.com/b/portrait-smiling-attractive-cheerful-young-man-face-human-facial-emotions-expressions-close-up-happy-having-fun-joy-153222193.jpg"
  );
const url5 =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

const url6 =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
const imageUrls = [url1, url2, url3, url4, url5, url6];
const labels = [1, 1, 0, 1, 1, 1]; // 1 for human, 0 for non-human

// Function to load images
async function loadImages() {
  const images = [];

  for (const imageUrl of imageUrls) {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    const canvas = document.createElement("canvas");
    canvas.width = 28;
    canvas.height = 28;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 28, 28);
    const imageData = ctx.getImageData(0, 0, 28, 28);

    // Convert the image to grayscale (single channel)
    const grayImageData = new ImageData(28, 28);
    for (let i = 0; i < 28 * 28; i++) {
      const r = imageData.data[i * 4]; // Red channel
      const g = imageData.data[i * 4 + 1]; // Green channel
      const b = imageData.data[i * 4 + 2]; // Blue channel
      const gray = (r + g + b) / 3; // Convert to grayscale
      grayImageData.data[i * 4] = gray;
    }

    const tensor = tf.browser.fromPixels(grayImageData, 1); // 1 channel (grayscale)
    images.push(tensor);
  }

  const imagesTensor = tf.stack(images);

  return imagesTensor;
}

// Function to load labels
async function loadLabels() {
  // Convert labels to a TensorFlow.js tensor
  const labelsTensor = tf.tensor2d(labels, [labels.length, 1], "int32");

  return labelsTensor;
}

export { loadImages, loadLabels };
