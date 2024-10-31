import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import "./user.css";
const Users = () => {
  const users = useLoaderData();

  console.log(users);
  return (
    <div className="users">
      <h2>Users : {users.length}</h2>
      <p>fantastic and awesome users.</p>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
