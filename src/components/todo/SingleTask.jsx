import React from "react";
import "../../sass/singleTask.scss";
import { useDispatch } from "react-redux";
import { taskDelete } from "../../redux/actions";

export const SingleTask = ({ task }) => {
  const { id, text } = task;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(taskDelete(id));
  };

  return (
    <form>
      <input type="text" value={text} readOnly />
      <div onClick={handleDelete}>&times;</div>
    </form>
  );
};
