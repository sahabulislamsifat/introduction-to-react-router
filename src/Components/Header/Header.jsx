import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      {/* <h2>NavBar</h2> */}
      <nav>
        <span>My Website</span>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/service"}>Service</NavLink>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
