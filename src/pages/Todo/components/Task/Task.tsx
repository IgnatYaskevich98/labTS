import { FC, memo } from "react";

import Checkbox from "@mui/material/Checkbox";
import { Paper } from "@mui/material";
import { icons } from "../../../../static/iconsForTodo/icons";

import style from "./styles.module.scss";

type TaskType = {
  title: string;
  id: string;
  isDone: boolean;
  handleRemoveTask: (currentID: string) => void;
  handleIsDone: (currentID: string) => void;
  handleEditMode: (currentID: string) => void;
};
export const Task: FC<TaskType> = memo(
  ({ title, id, isDone, handleRemoveTask, handleIsDone, handleEditMode }) => {
    return (
      <div className={style.container}>
        <Paper className={style.paper} elevation={3}>
          <div className={style.checkbox}>
            <Checkbox
              inputProps={{ "aria-label": "Checkbox demo" }}
              defaultChecked={isDone}
              onClick={() => handleIsDone(id)}
            />
          </div>

          <div className={style.taskName}>{title}</div>
          <div className={style.navBar}>
            <icons.EditIcon onClick={() => handleEditMode(id)} />
            <icons.DeleteIcon onClick={() => handleRemoveTask(id)} />
          </div>
        </Paper>
      </div>
    );
  }
);
