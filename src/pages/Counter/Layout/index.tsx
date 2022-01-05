import { memo } from "react";
import { Button } from "../../../components/ButtonForCounter";

import style from "./index.module.css";
import { v1 } from "uuid";

type LayoutType = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleReset: () => void;
  countValue: number;
  id: string;
  handleRemoveCounter?: (id: string) => void;
  isShow?: boolean;
};
export const Layout = memo<LayoutType>(
  ({
    handleIncrement,
    handleDecrement,
    handleReset,
    countValue,
    isShow = true,
    handleRemoveCounter,
    id = v1(),
  }) => {
    return (
      <div className={style.layout}>
        <div className={style.container}>
          {isShow && handleRemoveCounter && (
            <Button title={"Remove"} method={() => handleRemoveCounter(id)} />
          )}

          <div className={style.screen}>{countValue}</div>
          <div className={style.information}>
            {countValue % 2 === 0
              ? `Введено чётное число`
              : `Введено нечётное число`}
          </div>

          <div className={style.buttons}>
            <Button
              title={"-"}
              method={handleDecrement}
              disabled={countValue === 0}
            />
            <Button title={"Reset"} method={handleReset} />
            <Button title={"+"} method={handleIncrement} />
          </div>
        </div>
      </div>
    );
  }
);
