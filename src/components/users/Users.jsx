import React from "react";
import { useEffect, useState } from "react";
import { useHttp } from "../../api/usersService";
import { TitleTable } from "../TitleTable.jsx";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { request } = useHttp();
  const title = ["№", "firstName", "lastName", "phoneNumber", "emailAddress"];

  useEffect(() => {
    request("http://localhost:3000/")
      .then((data) => {
        setLoading(true);
        setUsers(data.users);
      })
      .catch(() => {
        setLoading(true);
        console.log("ERROR");
      });
  }, []);

  const usersInfo = users.map((user, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.firstName} </td>
        <td> {user.lastName} </td>
        <td>{user.phoneNumber}</td>
        <td>{user.emailAddress}</td>
      </tr>
    );
  });

  if (!loading) {
    return <h3>Loading...</h3>;
  } else if (loading && users.length > 0) {
    return (
      <table>
        <TitleTable title={title} />
        <tbody>{usersInfo}</tbody>
      </table>
    );
  } else {
    return <h3>Users not found!</h3>;
  }
};
