import styled from "styled-components";

const MainPageStyled = styled.main`
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
  .resume-area,
  .contact-area {
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

  .about-area span:first-child,
  .name {
    font-size: ${(props) => props.theme.fontSizes.extralarge};
    font-weight: 700;
    -webkit-text-stroke-color: ${(props) => props.theme.colors.primary};
    -webkit-text-stroke-width: 1.5px;
    font-family: ${(props) => props.theme.fonts.secondary};
    -webkit-text-fill-color: transparent;
    align-self: start;
    font-size: clamp(48px, 5vw, 100px);
  }

  .about-area span:first-child::after,
  .name {
    content: "I'm";
    -webkit-text-stroke-color: none;
    -webkit-text-stroke-width: 0;
    margin-left: 15px;
    -webkit-text-fill-color: ${(props) => props.theme.colors.txt.primary};
  }

  .resume-headings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

  .name {
    margin: 0;
  }

  .about-area img {
    max-width: 380px;
    min-width: 300px;
    height: auto;
    max-height: 100%;
    width: 100%;
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

  .contact-area {
    border: 1px solid ${(props) => props.theme.colors.bg.secondary};
    justify-content: center;
    gap: 30px;
    padding: 20px 0;
    position: relative;

    /* &::after {
      content: "";
      position: absolute;
      bottom: 50%;
      left: -1000px;
      right: -1000px;
      height: 1px;
      background-color: ${(props) => props.theme.colors.bg.secondary};
      z-index: 0;
    } */
  }

  .top-link {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    position: fixed;
    letter-spacing: 3px;
    bottom: 50px;
    right: -10px;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    -webkit-animation: slide-in-blurred-bottom 0.6s
      cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  }

  .slide-in-blurred-bottom {
    -webkit-animation: slide-in-blurred-bottom 0.6s
      cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: slide-in-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  }

  .top-link svg {
    fill: ${(props) => props.theme.colors.txt.secondary};
    width: 30px;
    height: 30px;
  }

  .hide {
    display: none;
  }

  ul {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1FR);
  }
  ///////////////////
  .an {
    animation-duration: 0.6s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      width: 70%;
      opacity: 20%;
      padding-top: 70%;
    }
  }

  ////////////////////

  @media screen and (max-width: 800px) {
    .resume-section {
      grid-template-columns: repeat(1, 1FR);
    }

    .skills-container {
      grid-template-columns: repeat(4, 1FR);
      justify-items: center;
    }
  }

  @-webkit-keyframes slide-in-blurred-bottom {
    0% {
      -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-bottom {
    0% {
      -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
      transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
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

    .about-heading {
      gap: 15px;
    }

    .about-area {
      gap: 20px;
    }

    .about-area img {
      width: 300px;
    }
  }
`;

export default MainPageStyled;
