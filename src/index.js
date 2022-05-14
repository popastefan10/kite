import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LoadScript } from "@react-google-maps/api";

const API_KEY = "AIzaSyCFhIVkwY_rRptuPIZy7wjC_ZGw6MCTLTo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Why LoadScript should be here: https://github.com/JustFly1984/react-google-maps-api/issues/70#:~:text=edited-,Well%2C%20I%20managed%20to%20reuse%20it%20by%20loading%20the%20Loadscript%20inside%20the%20index.js%20wrapping%20all%20components.,-%F0%9F%91%8D */}
    <LoadScript googleMapsApiKey={API_KEY}>
      <App />
    </LoadScript>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
