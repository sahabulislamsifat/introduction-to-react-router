import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      Hello! This is the Home Components.
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
