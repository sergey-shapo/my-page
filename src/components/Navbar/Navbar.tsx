import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/a">About</NavLink>
      <NavLink to="/b">Resume</NavLink>
      <NavLink to="/c">Portfolio</NavLink>
      <NavLink className="contact" to="/">
        HIRE ME
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
