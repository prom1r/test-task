import { TASK_CREATE } from "./types";

export const taskCreate = (text, id) => {
  return {
    type: TASK_CREATE,
    data: { text, id },
  };
};
