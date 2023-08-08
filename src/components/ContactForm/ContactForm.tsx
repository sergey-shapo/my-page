import ContactFormStyled from "./ContactFormStyled";
import { useRef, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = (): React.ReactElement => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_yva7ogl",
          "template_6ktsvrb",
          form.current,
          "tJK_hgc7tKYNco7-l"
        )
        .then((result) => {
          return result.status === 200 ? "ok" : "bad";
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <ContactFormStyled ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </ContactFormStyled>
  );
};

export default ContactForm;
