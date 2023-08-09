import { styled } from "styled-components";

const ModalStyled = styled.span`
  position: fixed;
  padding: 12px;
  color: #00cc66;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  &.error {
    color: red;
  }

  @media (min-width: 450px) {
    top: 85%;
  }
`;

export default ModalStyled;
