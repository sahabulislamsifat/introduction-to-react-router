import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>Hello! This is the Home Components.</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
