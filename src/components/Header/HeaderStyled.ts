import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
  /* border-bottom: 1px solid ${(props) => props.theme.colors.bg.secondary}; */
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -1000px;
    right: -1000px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.bg.secondary};
  }

  @media screen and (min-width: 1050px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export default HeaderStyled;
