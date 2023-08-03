import styled from "styled-components";

const NavbarStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${(props) => props.theme.colors.txt.primary};
  font-size: ${(props) => props.theme.fontSizes.smaller};
  font-weight: 400;
  padding: 20px 0;

  .active {
    color: ${(props) => props.theme.colors.primary};
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }

  .contact {
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    font-size: 12px;
  }

  .contact:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
  }

  @media (max-width: 699px) {
    display: none;
  }
`;

export default NavbarStyled;
