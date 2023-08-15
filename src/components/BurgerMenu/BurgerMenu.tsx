import BurgerMenuStyled from "./BurgerMenuStyled";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const BurgerMenu = (): React.ReactElement => {
  const location = useLocation();
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    const handleMenuToggle = () => {
      const checkbox = checkboxRef.current;

      checkbox?.checked
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    };

    window.addEventListener("click", handleMenuToggle);

    return () => {
      window.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <BurgerMenuStyled className="mobile-menu">
      <input
        ref={checkboxRef}
        type="checkbox"
        id="checkbox"
        className="mobile-menu__checkbox"
      ></input>
      <label htmlFor="checkbox" className="mobile-menu__btn">
        <div className="mobile-menu__icon"></div>
      </label>
      <div className="mobile-menu__container">
        <div className="mobile-menu__list">
          <HashLink
            smooth
            to="/#top"
            className={location.hash === "#top" ? "active" : ""}
            onClick={handleClick}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#resume"
            className={location.hash === "#resume" ? "active" : ""}
            onClick={handleClick}
          >
            Resume
          </HashLink>
          <HashLink
            smooth
            to="/#skills"
            className={location.hash === "#skills" ? "active" : ""}
            onClick={handleClick}
          >
            Skills
          </HashLink>
          <Link
            onClick={handleClick}
            className="contact"
            to={location.pathname === "/" ? "/contact" : "/"}
          >
            {location.pathname === "/contact" ? "Home" : "LET'S TALK"}
          </Link>
        </div>
      </div>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
