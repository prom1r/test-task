import React from "react";
import members from "../../../heroes.json";
import { HeroesHeader } from "../heroes/HeroesHeader.jsx";

export const Heroes = () => {
  const { members: heroes } = members;

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
        <HeroesHeader />
        <tbody>{res}</tbody>
      </table>
    );
  }

  if (!heroes.length) {
    return <h2>Heroes not found!</h2>;
  }
};
