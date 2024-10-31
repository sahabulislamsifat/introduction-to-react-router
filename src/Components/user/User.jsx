import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const usersStyle = {
    border: "2px solid red",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={usersStyle}>
      <p>{name}</p>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
