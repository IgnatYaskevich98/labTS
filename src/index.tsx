import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes/Routes";
import "./index.css";
import { MainLayout } from "./components/MainLayout";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
