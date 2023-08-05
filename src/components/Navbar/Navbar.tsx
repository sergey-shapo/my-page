import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom"; // Importamos useLocation

import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  const location = useLocation();

  return (
    <NavbarStyled>
      <HashLink
        smooth
        to="/#about"
        className={location.hash === "#about" ? "active" : ""}
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
    </NavbarStyled>
  );
};

export default Navbar;

/* <NavLink className="contact" to="/">
        HIRE ME
      </NavLink> */
