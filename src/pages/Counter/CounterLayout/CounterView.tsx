import { memo } from "react";
import { Button } from "../../../components/ButtonForCounter";

import style from "./counterLayout.module.css";
import { v1 as uuidV1 } from "uuid";

type CounterViewType = {
  handleIncrement: (currentID: string) => void;
  handleDecrement: (currentID: string) => void;
  handleReset: (currentID: string) => void;
  currentValue: number;
  currentID: string;
  handleRemoveCounter?: (id: string) => void;
  isShow?: boolean;
};
export const CounterView = memo<CounterViewType>(
  ({
    handleIncrement,
    handleDecrement,
    handleReset,
    currentValue,
    isShow = true,
    handleRemoveCounter,
    currentID = uuidV1(),
  }) => {
    return (
      <div className={style.layout}>
        <div className={style.container}>
          {isShow && handleRemoveCounter && (
            <Button
              title={"Remove"}
              method={() => handleRemoveCounter(currentID)}
            />
          )}

          <div className={style.screen}>{currentValue}</div>
          <div className={style.information}>
            {currentValue % 2 === 0
              ? `Введено чётное число`
              : `Введено нечётное число`}
          </div>

          <div className={style.buttons}>
            <Button
              title={"-"}
              method={() => handleDecrement(currentID)}
              disabled={currentValue === 0}
            />
            <Button title={"Reset"} method={() => handleReset(currentID)} />
            <Button title={"+"} method={() => handleIncrement(currentID)} />
          </div>
        </div>
      </div>
    );
  }
);
