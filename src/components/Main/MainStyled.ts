import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #000;
  gap: 40px;
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

  span:nth-child(2) {
    color: ${(props) => props.theme.colors.txt.primary};
    font-size: 38px;
    line-height: 40px;
  }

  .resume-area span {
    color: ${(props) => props.theme.colors.txt.primary};
  }

  h2 {
    position: relative;
    text-align: center;
  }

  h2 .resume {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: #212121;
    -webkit-text-stroke-width: 0.5px;
    font-size: 90px;
    z-index: 0;
    letter-spacing: 2px;
  }

  .qualifications {
    position: relative;
    text-transform: capitalize;
    margin-bottom: 0;
    z-index: 1;
    color: ${(props) => props.theme.colors.txt.primary};
    font-weight: 600;
    font-size: 38px;
  }

  .resume-section {
    display: grid;
    grid-template-columns: repeat(2, 1FR);
    gap: 20px;
  }

  .cv-heading {
    color: ${(props) => props.theme.colors.txt.primary};
    font-size: ${(props) => props.theme.fontSizes.medium};
    /* text-align: left; */
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
`;

export default MainStyled;
