import { AppRoutes } from "./routes";
import { useEffect } from "react";
import { initGA, trackPage } from "./utils/analytics";
import "tippy.js/dist/tippy.css";

function App() {
  useEffect(() => {
    initGA();
    trackPage(window.location.pathname);
  }, []);

  return <AppRoutes />;
}

export default App;
