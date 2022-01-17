import { FC, useCallback, useState } from "react";
import { CounterView } from "../CounterLayout/CounterView";
import { v1 } from "uuid";

type CounterType = {
  isShow?: boolean;
  currentId?: string;
  handleRemoveCounter?: (id: string) => void;
};

export const Counter: FC<CounterType> = ({
  isShow,
  currentId = v1(),
  handleRemoveCounter,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setValue((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    if (value > 0) setValue((state) => state - 1);
  }, [value]);

  const handleReset = useCallback(() => {
    setValue(0);
  }, []);
  return (
    <CounterView
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleRemoveCounter={handleRemoveCounter}
      currentValue={value}
      currentID={currentId}
      isShow={isShow}
    />
  );
};
