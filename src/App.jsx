import ROUTES, { RenderRoutes } from "./routes/Routes";

import "./App.css";
import { useAuthStore } from "./store/Auth";
import ImageRecognition from "./components/Machine Learning Model/ImageRecognition";
import ImageClassifier from "./screen/AIModel/ImageClassifier";
import ImageSimilarityChecker from "./screen/AIModel/ImageSimilarityChecker";

function App() {
  const { token } = useAuthStore();
  return <RenderRoutes routes={ROUTES} token={token} />;
  // return <ImageRecognition />;
  // return <ImageClassifier />;
  //return <ImageSimilarityChecker />;
}

export default App;
