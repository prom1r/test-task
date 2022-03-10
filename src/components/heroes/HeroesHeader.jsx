import React from "react";

export const HeroesHeader = () => {
  return (
    <thead>
      <tr>
        <td style={{ fontWeight: "bold", paddingRight: "20px" }}>№:</td>
        <td style={{ fontWeight: "bold", paddingRight: "20px" }}>Name:</td>
        <td style={{ fontWeight: "bold", paddingRight: "20px" }}>Age:</td>
        <td style={{ fontWeight: "bold", paddingRight: "20px" }}>
          SecretIdentity:
        </td>
        <td style={{ fontWeight: "bold", paddingRight: "20px" }}>Powers:</td>
      </tr>
    </thead>
  );
};
