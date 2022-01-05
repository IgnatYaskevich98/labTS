import { v1 } from "uuid";
import { Dispatch, FC, SetStateAction } from "react";

import style from "./index.module.css";

type NavBarType = {
  setCounters: Dispatch<SetStateAction<CountersType[]>>;
  counters: Array<CountersType>;
  totalValue: number;
};
export type CountersType = {
  value: number;
  id: string;
};

export const NavBar: FC<NavBarType> = ({
  setCounters,
  counters,
  totalValue = 0,
}) => {
  const interactionWithCounter = (action: string) => {
    return counters.reduce((result: Array<CountersType>, { id, value }) => {
      let currentCounter;

      if (value % 2 === 0 && action === "even") {
        currentCounter = { value: value + 1, id: id };
      } else if (value % 2 !== 0 ?? action === "odd") {
        currentCounter = { value: value - 1, id: id };
      } else currentCounter = { id, value };

      result.push(currentCounter);
      return result;
    }, []);
  };

  const handleAddCounter = () => {
    const counterObj = { value: 0, id: v1() };
    const listCounters = interactionWithCounter("even");
    listCounters.push(counterObj);

    counters.length === 0
      ? setCounters((state) => [...state, counterObj])
      : setCounters(listCounters);
  };
  const handleRemoveLastCounter = () => {
    const listCounters = interactionWithCounter("odd");
    listCounters.pop();
    setCounters(listCounters);
  };
  const handleResetAllCounters = () => {
    setCounters([]);
  };

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <button className={style.ButtonTitle} onClick={handleAddCounter}>
          Add Counter
        </button>
        <button className={style.ButtonTitle} onClick={handleRemoveLastCounter}>
          Remove Counter
        </button>
        <button className={style.ButtonTitle} onClick={handleResetAllCounters}>
          Reset
        </button>
      </div>
      <div className={style.information}>
        <div>Counters: {counters.length}</div>
        <div>Total value: {totalValue}</div>
      </div>
    </div>
  );
};
