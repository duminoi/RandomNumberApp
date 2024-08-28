import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProviderApp from "./store/Provider.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </StrictMode>
);
