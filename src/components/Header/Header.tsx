import HeaderStyled from "./HeaderStyled";
import Navbar from "../Navbar/Navbar";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
