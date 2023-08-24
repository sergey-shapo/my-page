import ModalStyled from "./ModalStyled";

interface ModalProps {
  text: string;
  isError?: boolean;
  showModal: boolean;
}

const Modal = ({
  text,
  isError = false,
  showModal,
}: ModalProps): React.ReactElement => {
  const className = isError
    ? `error ${showModal ? "visible" : ""}`
    : showModal
    ? "visible"
    : "";

  return <ModalStyled className={className}>{text}</ModalStyled>;
};

export default Modal;
