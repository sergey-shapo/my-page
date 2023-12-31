import { styled } from "styled-components";

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 7px;

  input,
  textarea {
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.heading};
    border-radius: 0.25rem;
    width: 300px;
    color: white;
    padding: 20px;
    margin-bottom: 10px;
  }

  input {
    height: 62px;
  }

  textarea {
    min-height: 120px;
    background: transparent;
  }

  .button {
    position: relative;
    align-self: center;
    padding: 12px 20px;
    background: linear-gradient(
      90deg,
      rgba(133, 123, 225, 1) 0%,
      rgba(177, 127, 234, 1) 100%
    );
    color: ${(props) => props.theme.colors.light};
    border-radius: 30px;
    max-width: 150px;
    letter-spacing: 1px;
    height: auto;
  }
`;

export default ContactFormStyled;
