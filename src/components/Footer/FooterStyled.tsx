import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.txt.secondary};
  font-size: ${(props) => props.theme.fontSizes.extrasmall};
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 30px 0;
  gap: 30px;

  .footer-icons {
    display: flex;
    gap: 20px;
  }

  .footer-icons svg {
    fill: ${(props) => props.theme.colors.txt.secondary};

    &:hover {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default FooterStyled;
