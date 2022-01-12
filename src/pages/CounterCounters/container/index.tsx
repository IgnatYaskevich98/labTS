import { FC, useCallback, useState } from "react";
import { NavBar } from "../components/NavBar";

import style from "./index.module.css";
import { CounterLayout } from "../../Counter/CounterLayout/CounterLayout";
import { v1 } from "uuid";

type CountersType = {
  value: number;
  id: string;
};

export const ContainerCounterCounters: FC = () => {
  const [counters, setCounters] = useState<Array<CountersType>>([]);

  const handleRemoveCounter = useCallback((id: string) => {
    setCounters((state) => state.filter((item) => item.id !== id));
  }, []);

  const handleIncrementCounter = useCallback((currentID: string) => {
    setCounters((state) =>
      state.map((counter) =>
        counter.id === currentID
          ? { value: counter.value + 1, id: currentID }
          : counter
      )
    );
  }, []);

  const handleDecrementCounter = useCallback((currentID: string) => {
    setCounters((state) =>
      state.map((counter) =>
        counter.id === currentID
          ? { value: counter.value - 1, id: currentID }
          : counter
      )
    );
  }, []);

  const handleResetCounter = useCallback((currentID: string) => {
    setCounters((state) =>
      state.map((counter) =>
        counter.id === currentID
          ? { value: (counter.value = 0), id: currentID }
          : counter
      )
    );
  }, []);

  const findTotalValueAllCounters = useCallback(() => {
    return counters.reduce((result, { value }) => {
      return result + value;
    }, 0);
  }, [counters]);

  const handleCreateNewCounter = useCallback(() => {
    const newCounter = { value: 0, id: v1() };

    setCounters((state) => [...state, newCounter]);
    setCounters((state) =>
      state.map((counter) =>
        counter.value % 2 === 0
          ? { value: counter.value + 1, id: counter.id }
          : counter
      )
    );
  }, []);

  const handleRemoveLastCounter = useCallback(() => {
    setCounters((state) => state.slice(0, -1));
    setCounters((state) =>
      state.map((counter) =>
        counter.value % 2 !== 0
          ? { value: counter.value - 1, id: counter.id }
          : counter
      )
    );
  }, [counters]);

  const handleResetAllCounters = useCallback(() => {
    setCounters([]);
  }, []);

  const totalValue = findTotalValueAllCounters();
  const totalCounters = counters.length;
  return (
    <div className={style.counterCounters}>
      <NavBar
        handleCreateNewCounter={handleCreateNewCounter}
        handleRemoveLastCounter={handleRemoveLastCounter}
        handleResetAllCounters={handleResetAllCounters}
      />
      <div className={style.information}>
        <div>Counters: {totalCounters}</div>
        <div>Total value: {totalValue}</div>
      </div>
      <div className={style.counters}>
        {counters.map(({ id, value }) => (
          <CounterLayout
            handleIncrement={handleIncrementCounter}
            handleDecrement={handleDecrementCounter}
            handleReset={handleResetCounter}
            handleRemoveCounter={handleRemoveCounter}
            currentID={id}
            currentValue={value}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};
