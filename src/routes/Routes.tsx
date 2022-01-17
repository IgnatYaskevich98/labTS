import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import { LayoutPage } from "../pages/SiteLayout/LayoutPage";
import { Counter } from "../pages/Counter/containers/Counter";
import { CounterCounters } from "../pages/CounterCounters";

export const Router = () => {
  const { COUNTEROfCOUNTERS, COUNTER, LAYOUT } = ROUTE_NAMES;
  return (
    <Routes>
      <Route path={COUNTEROfCOUNTERS} element={<CounterCounters />} />
      <Route path={COUNTER} element={<Counter isShow={false} />} />
      <Route path={LAYOUT} element={<LayoutPage />} />
    </Routes>
  );
};
