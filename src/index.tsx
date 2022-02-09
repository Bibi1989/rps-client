import CVCProvider from "context/CVC/Provider";
import LayoutProvider from "context/Layout/Provider";
import PVCProvider from "context/PVC/Provider";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <LayoutProvider>
    <PVCProvider>
      <CVCProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CVCProvider>
    </PVCProvider>
  </LayoutProvider>,
  document.getElementById("root")
);
