import React from "react";
import { TitleColumn } from "./TitleColumn.jsx";

export const TitleTable = ({ title }) => {
  return title.map((title, index) => {
    return (
      <>
        <TitleColumn key={index} title={title} />
      </>
    );
  });
};
