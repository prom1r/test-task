import { TASK_CREATE } from "./types";

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
    default:
      return state;
  }
};
