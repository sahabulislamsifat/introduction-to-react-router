import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>Details About Users : {name}</h2>
      <p>Websites : {website}</p>
    </div>
  );
};

export default UserDetails;