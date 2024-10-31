import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./home.css";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>This is the Home Components.</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
