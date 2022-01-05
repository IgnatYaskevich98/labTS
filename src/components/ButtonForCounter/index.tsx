import style from "./button.module.css"
import {memo} from "react";

type ButtonType = {
    title: string
    method: () => void
    disabled?: boolean
}
export const Button = memo<ButtonType>(({title, method, disabled}) => {
    return <button className={style.buttonElement} onClick={method} disabled={disabled}>
        {title}
    </button>
});

