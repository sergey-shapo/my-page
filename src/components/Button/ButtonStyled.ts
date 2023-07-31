import styled from "styled-components";

const MainStyled = styled.button`
  padding: 12px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  border-radius: 30px;
`;

export default MainStyled;
