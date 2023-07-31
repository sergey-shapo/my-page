import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">Resume</NavLink>
      <NavLink to="/">Portfolio</NavLink>
      <NavLink className="contact" to="/">
        HIRE ME
      </NavLink>
      <BurgerMenu />
    </NavbarStyled>
  );
};

export default Navbar;
