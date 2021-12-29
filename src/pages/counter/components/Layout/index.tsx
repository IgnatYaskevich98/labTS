import {FC, memo} from 'react';
import {Button} from "../Button/Button";

import style from "./index.module.css"

type LayoutType = {
    handleIncrement: () => void
    handleDecrement: () => void
    handleReset: () => void
    countValue: number
}
export const Layout = memo<LayoutType>(({handleIncrement, handleDecrement, handleReset, countValue}) => {
    return (
        <div className={style.container}>

            <Button title={'Remove'} method={() => alert('Remove')}/>

            <div className={style.screen}>{countValue}</div>
            <div
                className={style.information}>{countValue % 2 === 0 ? `Введено чётное число` : `Введено нечётное число`}</div>

            <div className={style.buttons}>
                <Button title={'-'} method={handleDecrement} disabled={countValue === 0}/>
                <Button title={'Reset'} method={handleReset}/>
                <Button title={'+'} method={handleIncrement}/>
            </div>

        </div>
    );
});
