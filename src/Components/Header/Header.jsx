import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      {/* <h2>NavBar</h2> */}
      <nav>
        <span>My Website</span>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
