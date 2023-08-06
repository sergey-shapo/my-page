import HeaderStyled from "./HeaderStyled";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "/logo.png";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" width={38} height="auto" />
      <Navbar />
      <BurgerMenu />
    </HeaderStyled>
  );
};

export default Header;
