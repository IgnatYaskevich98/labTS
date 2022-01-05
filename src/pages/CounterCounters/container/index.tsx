import { useState } from "react";
import { CountersType, NavBar } from "../NavBar";

import style from "./index.module.css";
import { Layout } from "../../Counter/Layout";

export const ContainerCounterCounters = () => {
  const [counters, setCounters] = useState<Array<CountersType>>([]);

  const handleRemoveCounter = (id: string) => {
    setCounters((state) => state.filter((item) => item.id !== id));
  };

  const interactionWithCounter = (
    currentID: string,
    action: string = "increment"
  ) => {
    const listCounters = counters.reduce(
      (result: Array<CountersType>, { id, value }) => {
        const numberCheck = value > 0 ? value - 1 : 0;

        let currentCounter;
        if (id === currentID && action === "increment") {
          currentCounter = { value: value + 1, id: currentID };
        } else if (id === currentID && action === "decrement") {
          currentCounter = { value: numberCheck, id: currentID };
        } else if (id === currentID && action === "reset") {
          currentCounter = { id, value: (value = 0) };
        } else currentCounter = { id, value };

        result.push(currentCounter);
        return result;
      },
      []
    );
    setCounters(listCounters);
  };

  const handleIncrement = (currentID: string) => {
    interactionWithCounter(currentID);
  };

  const handleDecrement = (currentID: string) => {
    interactionWithCounter(currentID, "decrement");
  };

  const handleReset = (currentID: string) => {
    interactionWithCounter(currentID, "reset");
  };

  const findTotalValueAllCounters = () => {
    return counters.reduce((result, { value }) => {
      return result + value;
    }, 0);
  };
  const totalValue = findTotalValueAllCounters();

  return (
    <div className={style.counterCounters}>
      <NavBar
        counters={counters}
        setCounters={setCounters}
        totalValue={totalValue}
      />
      <div className={style.counters}>
        {counters.map(({ id, value }, index) => (
          <Layout
            currentValue={value}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
            currentID={id}
            key={id}
            handleRemoveCounter={handleRemoveCounter}
          />
        ))}
      </div>
    </div>
  );
};
