import HeaderStyled from "./HeaderStyled";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import logo from "/logo.png";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" width={40} height={40} />
      <Navbar />
      <BurgerMenu />
    </HeaderStyled>
  );
};

export default Header;
