import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import { LayoutPage } from "../pages/SiteLayout/LayoutPage";
import { Counter } from "../pages/Counter";
import { CounterCounters } from "../pages/CounterCounters";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.COUNTEROfCOUNTERS}
        element={<CounterCounters />}
      />
      <Route path={ROUTE_NAMES.COUNTER} element={<Counter isShow={false} />} />
      <Route path={ROUTE_NAMES.LAYOUT} element={<LayoutPage />} />
    </Routes>
  );
};
