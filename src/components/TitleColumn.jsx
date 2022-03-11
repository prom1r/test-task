import React from "react";

export const TitleColumn = ({ title }) => {
  const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <td style={{ fontWeight: "bold", paddingRight: "20px" }}>
      {ucFirst(title)}
    </td>
  );
};
