import {
  ChangeEvent,
  FC,
  memo,
  MouseEvent,
  useCallback,
  useState,
} from "react";

import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Alert from "@mui/material/Alert";

import style from "./styles.module.scss";

type TaskFormType = {
  handleCreateNewTask: (title: string) => void;
};
export const TaskForm: FC<TaskFormType> = memo(({ handleCreateNewTask }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(false);
  const onChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTaskName(event.currentTarget.value);
    },
    [setTaskName]
  );

  const handleCreateTask = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (taskName.length >= 4) {
        handleCreateNewTask(taskName);
        setTaskName("");
      } else {
        setError(() => true);
        setTimeout(() => {
          setError(() => false);
        }, 4000);
        clearTimeout();
      }
    },
    [handleCreateNewTask, taskName]
  );
  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <div className={style.inputBlock}>
          <TextField
            className={style.input}
            id="outlined-basic"
            label="Enter task name"
            variant="outlined"
            color={"secondary"}
            value={taskName}
            onChange={onChangeTitle}
          />
        </div>
        <div className={style.buttonBlock}>
          <Button
            className={style.button}
            size={"medium"}
            variant="contained"
            endIcon={<AddIcon />}
            color={"secondary"}
            onClick={handleCreateTask}
          >
            Create task
          </Button>
          {error && (
            <Alert className={style.error} severity="error">
              Need enter 4 symbol
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
});
