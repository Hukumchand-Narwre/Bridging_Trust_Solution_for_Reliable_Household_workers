import createModel from "./model";
import { loadImages, loadLabels } from "./loadDataset";

async function trainModel() {
  const model = await createModel();
  const xTrain = await loadImages(); // Load your binary classification dataset
  const yTrain = await loadLabels();

  await model.fit(xTrain, yTrain, {
    epochs: 10,
    validationSplit: 0.2,
    loss: "binaryCrossentropy",
  });

  // Save the model with an appropriate path
  //await model.save("file://./my-new-model"); // Adjust the path as needed
  await model.save("indexeddb://my-model");
}

export default trainModel;
