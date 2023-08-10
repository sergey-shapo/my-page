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
  const visible = showModal ? " visible" : "";

  return (
    <ModalStyled className={isError ? `error ${visible}` : `${visible}`}>
      {text}
    </ModalStyled>
  );
};

export default Modal;
