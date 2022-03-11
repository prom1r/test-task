import { TASK_CREATE, TASK_DELETED } from "./types";

export const taskCreate = (text, id) => {
  return {
    type: TASK_CREATE,
    data: { text, id },
  };
};

export const taskDelete = (id) => {
  return {
    type: TASK_DELETED,
    data: { id },
  };
};
