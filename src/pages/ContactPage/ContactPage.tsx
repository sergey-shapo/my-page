import ContactForm from "../../components/ContactForm/ContactForm";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ContactPageStyled from "./ContactPageStyled";

const ContactPage = (): React.ReactElement => {
  return (
    <ContactPageStyled>
      {/* <h1>Get In Touch</h1> */}
      <SectionHeading
        frontTxt="Get In Touch"
        backgroundTxt="Contact"
      ></SectionHeading>
      <ContactForm />
    </ContactPageStyled>
  );
};

export default ContactPage;
