import { v1 } from "uuid";
import { Dispatch, FC, SetStateAction } from "react";

import style from "./index.module.css";

type NavBarType = {
  setCounters: Dispatch<SetStateAction<CountersType[]>>;
  counters: Array<CountersType>;
  totalValue: number;
};
export type CountersType = {
  count: number;
  id: string;
};

export const NavBar: FC<NavBarType> = ({
  setCounters,
  counters,
  totalValue,
}) => {
  const handleAddCounter = () => {
    const counterObj = { count: 0, id: v1() };
    setCounters((state) => [...state, counterObj]);
  };
  const handleRemoveLastCounter = () => {
    setCounters((state) => state.slice(0, state.length - 1));
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
