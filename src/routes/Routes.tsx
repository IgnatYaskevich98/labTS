import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import { LayoutPage } from "../pages/SiteLayout/LayoutPage";
import { Counter } from "../pages/Counter/containers/Counter";
import { CountersManagerContainerRedux } from "../pages/CounterCountersWithRedux/containers/CountersManagerContainerRedux";
import { CountersManagerContainer } from "../pages/CounterCouters/containers/CountersManagerCountainer";
import { TodoContainer } from "../pages/Todo/container";

export const Router = () => {
  const { COUNTER_MANAGER_REDUX, COUNTER_MANAGER, COUNTER, LAYOUT, TODO } =
    ROUTE_NAMES;
  return (
    <Routes>
      <Route
        path={COUNTER_MANAGER_REDUX}
        element={<CountersManagerContainerRedux />}
      />
      <Route path={COUNTER_MANAGER} element={<CountersManagerContainer />} />
      <Route path={COUNTER} element={<Counter isShow={false} />} />
      <Route path={LAYOUT} element={<LayoutPage />} />
      <Route path={LAYOUT} element={<LayoutPage />} />
      <Route path={TODO} element={<TodoContainer />} />
    </Routes>
  );
};
