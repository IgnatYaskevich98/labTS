import {Route, Routes} from "react-router-dom";

import {ROUTE_NAMES} from "./routeNames";
import {SiteLayout} from "../pages/siteLayout/SiteLayout";
import {Counter} from "../pages/counter/Counter";

export const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<div>home</div>}/>
            <Route path={ROUTE_NAMES.LAYOUT} element={<SiteLayout/>}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<Counter/>}/>
        </Routes>
    )
};

