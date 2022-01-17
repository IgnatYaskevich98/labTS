import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";

import style from "./index.module.css";
import React from "react";

export const Header = React.memo(() => {
  return (
    <div className={style.container}>
      <NavLink className={style.navBar} to={ROUTE_NAMES.COUNTEROfCOUNTERS}>
        counter counters
      </NavLink>
      <NavLink className={style.navBar} to={ROUTE_NAMES.COUNTER}>
        counter
      </NavLink>

      <NavLink className={style.navBar} to={ROUTE_NAMES.LAYOUT}>
        layout
      </NavLink>
    </div>
  );
});
