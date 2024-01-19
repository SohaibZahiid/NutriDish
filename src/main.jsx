import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import "./index.css";
import { AuthContextProvider } from "./cntx/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
