import {FC} from "react";
import style from './index.module.css'

type ButtonType = {
    title: string
}
export const Button: FC<ButtonType> = ({title}) => {
    return <button className={style.button}>
        {title}
    </button>
};

