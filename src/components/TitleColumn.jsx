import React from "react";
import "../sass/table.scss";

export const TitleColumn = ({ title }) => {
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return <td>{ucFirst(title)}</td>;
};
