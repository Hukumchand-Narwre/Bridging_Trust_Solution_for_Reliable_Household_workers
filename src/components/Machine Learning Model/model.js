import * as tf from "@tensorflow/tfjs";

async function createModel() {
  const model = tf.sequential();

  // Convolutional layer with larger filters and more filters
  model.add(
    tf.layers.conv2d({
      inputShape: [28, 28, 1],
      filters: 64, // Increase the number of filters
      kernelSize: 5, // Increase kernel size for larger receptive fields
      activation: "relu",
    })
  );

  // MaxPooling layer with larger pool size
  model.add(
    tf.layers.maxPooling2d({
      poolSize: [2, 2],
    })
  );

  // Another convolutional layer
  model.add(
    tf.layers.conv2d({
      filters: 128, // More filters
      kernelSize: 3,
      activation: "relu",
    })
  );

  // Another MaxPooling layer
  model.add(
    tf.layers.maxPooling2d({
      poolSize: [2, 2],
    })
  );

  // Flatten the output before the dense layers
  model.add(tf.layers.flatten());

  // Dense layers with more units
  model.add(
    tf.layers.dense({
      units: 256, // Increase the number of units
      activation: "relu",
    })
  );

  // Output layer with a single unit and sigmoid activation for binary classification
  model.add(
    tf.layers.dense({
      units: 1,
      activation: "sigmoid",
    })
  );

  model.compile({
    optimizer: "adam",
    loss: "binaryCrossentropy",
    metrics: ["accuracy"],
  });

  return model;
}

export default createModel;
