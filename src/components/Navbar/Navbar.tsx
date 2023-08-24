import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import CheckBox from "../CheckBox/CheckBox";
import AppContext from "../../context";
import { useContext } from "react";

const Navbar = (): React.ReactElement => {
  const location = useLocation();
  const changeTheme = useContext(AppContext);

  return (
    <NavbarStyled>
      <CheckBox onChange={changeTheme}></CheckBox>
      <HashLink
        smooth
        to="/# top"
        className={location.hash === "#top" ? "active" : ""}
      >
        About
      </HashLink>
      <HashLink
        smooth
        to="/#resume"
        className={location.hash === "#resume" ? "active" : ""}
      >
        Resume
      </HashLink>
      <HashLink
        smooth
        to="/#skills"
        className={location.hash === "#skills" ? "active" : ""}
      >
        Skills
      </HashLink>
      <Link
        className="contact"
        to={location.pathname === "/" ? "/contact" : "/"}
      >
        {location.pathname === "/contact" ? "Home" : "LET'S TALK"}
      </Link>
    </NavbarStyled>
  );
};

export default Navbar;
