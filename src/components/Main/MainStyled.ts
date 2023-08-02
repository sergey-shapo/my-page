import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #000;
  gap: 80px;
  width: 80%;
  font-family: ${(props) => props.theme.fonts.secondary};

  .about-area,
  .resume-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 23px;
  }

  .about-area span:first-child {
    font-size: ${(props) => props.theme.fontSizes.extralarge};
    font-weight: 700;
    -webkit-text-stroke-color: ${(props) => props.theme.colors.primary};
    -webkit-text-stroke-width: 0.5px;
    font-family: ${(props) => props.theme.fonts.secondary};
    -webkit-text-fill-color: transparent;
    align-self: start;
  }

  .about-area span:first-child::after {
    content: "I'm";
    -webkit-text-stroke-color: ${(props) => props.theme.colors.light};
    margin-left: 15px;
  }

  .resume-headings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

  .name {
    color: ${(props) => props.theme.colors.txt.primary};
    font-size: 38px;
    line-height: 40px;
  }

  .resume-area span {
    color: ${(props) => props.theme.colors.txt.primary};
  }

  .resume-section {
    display: grid;
    grid-template-columns: repeat(2, 1FR);
    gap: 20px;
  }

  .cv-heading {
    color: ${(props) => props.theme.colors.txt.primary};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  button {
    color: white;
  }

  ul {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1FR);
  }

  @media screen and (max-width: 800px) {
    .resume-section {
      grid-template-columns: repeat(1, 1FR);
    }
  }

  @media screen and (min-width: 1050px) {
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export default MainStyled;
