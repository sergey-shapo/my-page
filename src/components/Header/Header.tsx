import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <NavLink to="/">SSH</NavLink>
    </HeaderStyled>
  );
};

export default Header;
