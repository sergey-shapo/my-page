import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #000;
  width: 80%;
  font-family: ${(props) => props.theme.fonts.secondary};

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 23px;
  }

  span:first-child {
    font-size: ${(props) => props.theme.fontSizes.extralarge};
    font-weight: 700;

    -webkit-text-stroke-color: ${(props) => props.theme.colors.primary};
    -webkit-text-stroke-width: 1px;
    font-family: ${(props) => props.theme.fonts.secondary};
    -webkit-text-fill-color: transparent;
    align-self: start;
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.colors.txt.primary};
    font-size: 38px;
    line-height: 40px;
  }

  button {
    color: white;
  }
`;

export default MainStyled;
