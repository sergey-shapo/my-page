import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Outlet />
        {/* <Main /> */}
      </ContainerStyled>
      <Footer />
    </>
  );
};

export default Layout;
