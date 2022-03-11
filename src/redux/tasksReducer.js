import { TASK_CREATE, TASK_DELETED } from "./types";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_CREATE:
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };
    case TASK_DELETED:
      const { data } = action;
      const { tasks } = state;
      const findIndex = tasks.findIndex((task) => task.id === data.id);
      const newTasks = [
        ...tasks.slice(0, findIndex),
        ...tasks.slice(findIndex + 1),
      ];
      return {
        ...state,
        tasks: newTasks,
      };
    default:
      return state;
  }
};
