import {
  ChangeEvent,
  FC,
  memo,
  MouseEvent,
  useCallback,
  useState,
} from "react";

import Paper from "@mui/material/Paper/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField/TextField";
import style from "./styles.module.scss";

type TaskType = {
  title: string;
  id: string;
  handleCancelChanges: (currentID: string) => void;
  handleChangeTask: (currentID: string, title: string) => void;
};
export const TaskEditMode: FC<TaskType> = memo(
  ({ title, id, handleCancelChanges, handleChangeTask }) => {
    const [taskName, setTaskName] = useState(title);

    const onChangeTitle = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.currentTarget.value);
      },
      [setTaskName]
    );
    const handleSaveChanges = useCallback(
      (event: MouseEvent) => {
        event.preventDefault();
        handleChangeTask(id, taskName);
        setTaskName("");
      },
      [handleChangeTask, id, taskName]
    );
    const handleCancel = useCallback(() => {
      handleCancelChanges(id);
      setTaskName(title);
    }, [handleCancelChanges, id, title]);

    return (
      <div className={style.container}>
        <Paper className={style.paper} elevation={3}>
          <div className={style.inputBlock}>
            <TextField
              className={style.input}
              id="outlined-basic"
              label="Enter your changes"
              variant="outlined"
              color={"secondary"}
              value={taskName}
              onChange={onChangeTitle}
            />
          </div>
          <div className={style.navBar}>
            <SaveIcon onClick={handleSaveChanges} />
            <CancelIcon onClick={handleCancel} />
          </div>
        </Paper>
      </div>
    );
  }
);
