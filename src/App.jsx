import ROUTES, { RenderRoutes } from "./routes/Routes";

import "./App.css";
import { useAuthStore } from "./store/Auth";

function App() {
  const { token } = useAuthStore();
  return <RenderRoutes routes={ROUTES} token={token} />;
}

export default App;
