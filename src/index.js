import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import des styles globaux et de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // import du CSS de Bootstrap
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // import du JS de Bootstrap

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
