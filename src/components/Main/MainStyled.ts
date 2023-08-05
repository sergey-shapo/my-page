import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  gap: 160px;
  width: 80%;
  font-family: ${(props) => props.theme.fonts.secondary};
  margin-top: 150px;
  max-width: 1000px;

  .about-area,
  .resume-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    width: 100%;
  }

  .about-heading {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .about-area span:first-child {
    font-size: ${(props) => props.theme.fontSizes.extralarge};
    font-weight: 700;
    -webkit-text-stroke-color: ${(props) => props.theme.colors.primary};
    -webkit-text-stroke-width: 1px;
    font-family: ${(props) => props.theme.fonts.secondary};
    -webkit-text-fill-color: transparent;
    align-self: start;
    font-size: clamp(75px, 5vw, 100px);
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
    white-space: nowrap;
  }

  .resume-area span {
    color: ${(props) => props.theme.colors.txt.primary};
  }

  .resume-section {
    display: grid;
    grid-template-columns: repeat(2, 1FR);
    gap: 60px;
  }

  .cv-heading {
    color: ${(props) => props.theme.colors.txt.primary};
    font-size: ${(props) => props.theme.fontSizes.medium};
    text-align: center;
    margin-bottom: 50px;
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-bottom: 100px;
    width: 100%;
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(8, 1FR);
    justify-items: center;
    gap: 20px;
  }

  .skills-container img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    width: 100%;
    height: auto;
    max-width: 70px;
    min-width: 50px;
  }

  .skills-container img:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.1);
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

    .skills-container {
      grid-template-columns: repeat(4, 1FR);
      justify-items: center;
    }
  }

  @media screen and (min-width: 1050px) {
    width: 70%;

    .about-area {
      flex-direction: row;
      justify-content: space-between;
    }

    .skills-container {
      column-gap: 30px;
      row-gap: 50px;
    }

    .about-area img {
      max-width: 500px;
      min-width: 300px;
      height: auto;
      max-height: 100%;
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    margin-top: 100px;

    .skills-container img {
      padding: 5px;
    }
  }
`;

export default MainStyled;
