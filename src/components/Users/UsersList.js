import React from "react";
import Card from "../UI/Card.js";

const UsersList = (props) => {
  return (
    <Card className='users'>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
