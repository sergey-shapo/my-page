import styled from "styled-components";

const MainStyled = styled.button`
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
`;

export default MainStyled;
