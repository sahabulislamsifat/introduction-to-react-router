const User = ({ user }) => {
  const { name, email, phone } = user;
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
    </div>
  );
};

export default User;
