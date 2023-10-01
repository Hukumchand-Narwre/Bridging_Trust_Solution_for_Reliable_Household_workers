import ROUTES, { RenderRoutes } from "./routes/Routes";

import "./App.css";

function App() {
  return <RenderRoutes routes={ROUTES} token={""} />;
}

export default App;
