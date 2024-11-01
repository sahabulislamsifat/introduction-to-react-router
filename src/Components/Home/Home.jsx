import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import "./home.css";
import Footer from "../footer/Footer";
const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <h2>This is the Home Components.</h2>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Home;
