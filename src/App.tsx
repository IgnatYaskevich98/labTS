import {Site} from "./siteLayout/Site";
import style from './App.module.css';


export const App = () => {
    return (
        <div className={style.app}>
            <Site/>
        </div>
    );
}
