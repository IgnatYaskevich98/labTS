import style from "./button.module.css";
import { FC, memo } from "react";

type ButtonType = {
  title: string;
  method: () => void;
  disabled?: boolean;
};
export const Button: FC<ButtonType> = memo(({ title, method, disabled }) => {
  return (
    <button
      className={style.buttonElement}
      onClick={method}
      disabled={disabled}
    >
      {title}
    </button>
  );
});
