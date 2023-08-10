import { styled } from "styled-components";

const ModalStyled = styled.div`
  padding: 12px;
  color: #00cc66;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  width: 200px;
  transform: none;
  visibility: hidden;
  align-self: center;
  text-align: center;

  &.error {
    color: red;
  }

  &.visible {
    visibility: visible;
  }
`;

export default ModalStyled;
