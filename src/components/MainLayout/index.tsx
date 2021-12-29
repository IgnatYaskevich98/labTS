import React, {FC} from 'react';
import {Header} from "../Header";

import style from "./index.module.css"

type MainLayoutType = {
    children: any
}
export const MainLayout: FC<MainLayoutType> = ({children}) => {
    return (
        <div className={style.container}>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    );
};
