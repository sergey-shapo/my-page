import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  isError?: boolean;
}

const Modal = ({ text, isError = false }: ModalProps): React.ReactElement => {
  return <ModalStyled className={isError ? "error" : ""}>{text}</ModalStyled>;
};

export default Modal;
