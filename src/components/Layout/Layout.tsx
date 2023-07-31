import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
      <Main />
    </ContainerStyled>
  );
};

export default Layout;
