import FooterStyled from "./FooterStyled";
import { ReactComponent as EmailSVG } from "../../assets/email.svg";
import { ReactComponent as InSVG } from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = (): React.ReactElement => {
  const linkedinURL = "https://www.linkedin.com/in/sergey-shaposhnik/";
  const emailAddress = "shapo@mail.com";
  const emailURL = `mailto:${emailAddress}`;
  return (
    <FooterStyled>
      <div className="footer-icons">
        <Link to={emailURL} target="_blank" aria-label="mail link">
          <EmailSVG />
        </Link>
        <Link to={linkedinURL} target="_blank" aria-label="linkedin link">
          <InSVG />
        </Link>
      </div>
      Develop by Sergey Shaposhnik
    </FooterStyled>
  );
};

export default Footer;
