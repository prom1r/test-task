import React from "react";
import members from "../../../heroes.json";
import { TitleTable } from "../TitleTable.jsx";

export const Heroes = () => {
  const { members: heroes } = members;

  const heroesColumnName = [
    "№:",
    "Name:",
    "Age:",
    "SecretIdentity:",
    "Powers:",
  ];

  let res = heroes.map((hero, index) => {
    return (
      <tr key={hero.id}>
        <td>{index + 1}</td>
        <td>{hero.name} </td>
        <td> {hero.age} </td>
        <td>{hero.secretIdentity}</td>
        <td>{hero.powers}</td>
      </tr>
    );
  });

  if (heroes.length > 0) {
    return (
      <table>
        <TitleTable title={heroesColumnName} />
        <tbody>{res}</tbody>
      </table>
    );
  }

  if (!heroes.length) {
    return <h2>Heroes not found!</h2>;
  }
};
