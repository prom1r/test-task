import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskCreate } from "../../redux/actions";
import uniqid from "uniqid";
import { SingleTask } from "Components/todo/SingleTask.jsx";

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
    if (text) {
      const id = uniqid();
      dispatch(taskCreate(text, id));
      setText("");
    } else {
      alert("please enter text");
    }
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleCreate}>Add</button>
      </div>
      <div>
        {!!tasks.length &&
          tasks.map((task) => {
            return <SingleTask key={task.id} task={task} />;
          })}
      </div>
    </div>
  );
};
