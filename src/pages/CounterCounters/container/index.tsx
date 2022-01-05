import { Counter } from "../../Counter";
import { useState } from "react";
import { CountersType, NavBar } from "../NavBar";

import style from "./index.module.css";

export const ContainerCounterCounters = () => {
  const [counters, setCounters] = useState<Array<CountersType>>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const handleRemoveCounter = (id: string) => {
    setCounters((state) => state.filter((item) => item.id !== id));
  };

  const findTotalValue = () => {
    setTotalValue(
      counters.reduce(
        (result, currentCounter) => currentCounter.count + result,
        0
      )
    );
  };

  return (
    <div className={style.counterCounters}>
      <NavBar
        counters={counters}
        setCounters={setCounters}
        totalValue={totalValue}
      />
      <div className={style.counters}>
        {counters.length > 0 &&
          counters.map(({ id, count }, index) => (
            <Counter
              currentId={id}
              key={id}
              handleRemoveCounter={handleRemoveCounter}
              counters={counters}
              setCounters={setCounters}
              count={count}
              index={index}
              findTotalValue={findTotalValue}
            />
          ))}
      </div>
    </div>
  );
};
