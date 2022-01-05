import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Layout } from "./Layout";
import { v1 } from "uuid";
import { CountersType } from "../CounterCounters/NavBar";

type CounterType = {
  isShow?: boolean;
  currentId?: string;
  handleRemoveCounter?: (id: string) => void;

  setCounters?: Dispatch<SetStateAction<CountersType[]>>;
  counters?: Array<CountersType>;
  count?: number;
  index?: number;
  findTotalValue?: () => void;
};

export const Counter: FC<CounterType> = ({
  isShow,
  currentId = v1(),
  handleRemoveCounter,

  setCounters,
  counters,
  count = 0,
  index = 0,
  findTotalValue,
}) => {
  const [value, setValue] = useState<number>(count);

  const checkCounter = () => {
    counters?.map(({ id, count }) => (count % 2 === 0 ? count + 1 : count - 1));
  };

  useEffect(() => {
    if (findTotalValue) findTotalValue();
  }, [value]);

  const handleIncrement = useCallback(() => {
    setValue((state) => state + 1);

    counters?.map(({ id, count }) =>
      id === currentId ? (counters[index].count = count + 1) : counters
    );
  }, []);

  const handleDecrement = useCallback(() => {
    if (value > 0) setValue((state) => state - 1);
    counters?.map(({ id, count }) =>
      id === currentId ? (counters[index].count = count - 1) : counters
    );
  }, [value]);

  const handleReset = useCallback(() => {
    setValue(0);
    counters?.map(({ id, count }) =>
      id === currentId ? (counters[index].count = 0) : counters
    );
  }, []);
  return (
    <Layout
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleRemoveCounter={handleRemoveCounter}
      countValue={value}
      isShow={isShow}
      id={currentId}
    />
  );
};
