import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initGA, trackPage } from "./utils/analytics";
import "./i18n";
import "./index.css";

initGA();
trackPage(window.location.pathname);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
