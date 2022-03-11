import React from "react";
import "../../sass/singleTask.scss";

export const SingleTask = ({ text }) => {
  return (
    <form>
      <input type="text" value={text} readOnly />
      <div>&times;</div>
    </form>
  );
};
