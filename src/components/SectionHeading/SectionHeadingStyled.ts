import { styled } from "styled-components";

const SectionHeadingStyled = styled.div`
  .front-txt {
    position: relative;
    text-transform: capitalize;
    margin-bottom: 0;
    z-index: 1;
    color: ${(props) => props.theme.colors.txt.primary};
    font-weight: 600;
    font-size: 33px;
  }

  position: relative;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .bg-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: #212121;
    -webkit-text-stroke-width: 2px;
    z-index: 0;
    letter-spacing: 3px;
    font-size: 82px;
  }
`;

export default SectionHeadingStyled;