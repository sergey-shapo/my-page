import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

const Layout = (): React.ReactElement => {
  return (
    <ContainerStyled>
      <Header />
      <Outlet />
      <Main />
      <ContactForm></ContactForm>
      <Footer />
    </ContainerStyled>
  );
};

export default Layout;
