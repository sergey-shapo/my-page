import HeaderStyled from "./HeaderStyled";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import logo from "/1.png";
import { Link } from "react-router-dom";

interface LayoutProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: LayoutProps): React.ReactElement => {
  return (
    <HeaderStyled>
      <Link to="/">
        {/* <img src={logo} alt="Logo" width={55} height={44} /> */}
      </Link>
      <Navbar toggleTheme={toggleTheme} />
      <BurgerMenu />
    </HeaderStyled>
  );
};

export default Header;
