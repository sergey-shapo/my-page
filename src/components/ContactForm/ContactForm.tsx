import ContactFormStyled from "./ContactFormStyled";
import { useRef, SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../Modal/Modal";

const ContactForm = (): React.ReactElement => {
  const [isError, setIsError] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const defaultErrorMessage = "Something went wrong. Please try again.";
  const [errorMessage, setErrorMessage] = useState<string>(defaultErrorMessage);
  const form = useRef<HTMLFormElement | null>(null);

  const successMessage = "Message Submitted!";

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();
    const isAllFieldCompleted =
      form.current?.user_name.value.length > 1 &&
      form.current?.user_email.value.length > 1 &&
      form.current?.message.value.length > 1;

    if (form.current && isAllFieldCompleted) {
      emailjs
        .sendForm(
          "service_yva7ogl",
          "template_6ktsvrb",
          form.current,
          "tJK_hgc7tKYNco7-l"
        )
        .then((result) => {
          if (result.status === 200) {
            setIsError(false);
          } else {
            setIsError(true);
          }
        })
        .catch((error) => {
          setErrorMessage(error.text);
        });
    } else {
      setErrorMessage("Please fill out the form");
      setIsError(true);
    }
    setShowModal(true);
  };

  return (
    <ContactFormStyled ref={form} onSubmit={sendEmail}>
      <div className="input-wrapper"></div>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" />

      <Modal
        text={isError ? errorMessage : successMessage}
        isError={isError}
        showModal={showModal}
      />
      <input className="button" type="submit" value="SEND MESSAGE" />
    </ContactFormStyled>
  );
};

export default ContactForm;
