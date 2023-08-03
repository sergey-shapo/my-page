import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 80%;
  margin: 0 auto;
  background-color: black;

  @media screen and (min-width: 1050px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export default HeaderStyled;
