import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskCreate } from "../../redux/actions";
import uniqid from "uniqid";

export const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    const { tasksReducer } = state;
    return tasksReducer.tasks;
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    const id = uniqid();
    dispatch(taskCreate(text, id));
    setText("");
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleCreate}>Add</button>
      </div>
    </div>
  );
};
