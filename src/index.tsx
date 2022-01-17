import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes/Routes";
import "./index.css";
import { MainLayout } from "./components/MainLayout";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
