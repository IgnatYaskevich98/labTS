import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import { LayoutPage } from "../pages/SiteLayout/LayoutPage";
import { Counter } from "../pages/Counter";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<div>home</div>} />
      <Route path={ROUTE_NAMES.LAYOUT} element={<LayoutPage />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<Counter />} />
    </Routes>
  );
};
