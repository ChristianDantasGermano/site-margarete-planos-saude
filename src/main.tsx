import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col h-screen">
      <Router />
    </div>
  </React.StrictMode>
);
