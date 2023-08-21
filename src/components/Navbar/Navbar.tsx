import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
interface LayoutProps {
  toggleTheme: () => void;
}

const Navbar = ({ toggleTheme }: LayoutProps): React.ReactElement => {
  const location = useLocation();
  console.log(toggleTheme);

  return (
    <NavbarStyled>
      <input
        className="theme-checkbox"
        type="checkbox"
        onChange={toggleTheme}
      />
      {/* <button onClick={toggleTheme}></button> */}
      <HashLink
        smooth
        to="/#top"
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
