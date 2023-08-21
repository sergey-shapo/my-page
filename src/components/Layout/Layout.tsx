import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";

interface LayoutProps {
  toggleTheme: () => void;
}

const Layout = ({ toggleTheme }: LayoutProps): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
