import HeaderStyled from "./HeaderStyled";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "/ssh.png";
import { Link } from "react-router-dom";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src={logo} alt="Logo" width={38} height={44} />
      </Link>
      <Navbar />
      <BurgerMenu />
    </HeaderStyled>
  );
};

export default Header;
