import ContactForm from "../components/ContactForm/ContactForm";
import ContactPageStyled from "./ContactPageStyled";

const ContactPage = (): React.ReactElement => {
  return (
    <ContactPageStyled>
      <h1>Get In Touch</h1>
      <ContactForm></ContactForm>
    </ContactPageStyled>
  );
};

export default ContactPage;
