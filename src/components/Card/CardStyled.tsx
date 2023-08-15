import { styled } from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px clamp(17px, 5vw, 30px);
  background-color: ${(props) => props.theme.colors.bg.secondary};
  box-sizing: border-box;
  max-width: 500px;
  border-radius: 10px;

  h2 {
    font-size: 22px;
    color: ${(props) => props.theme.colors.txt.primary};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.smaller};
    font-family: ${(props) => props.theme.fonts.primary};
  }

  .card-description {
    font-size: ${(props) => props.theme.fontSizes.smaller};
    font-family: ${(props) => props.theme.fonts.primary};
    line-height: 140%;
  }

  .card-info {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #3b3b3b;
    padding-bottom: 20px;
    font-size: clamp(14px, 1vw, 20px);
    white-space: nowrap;
  }

  .year {
    font-size: ${(props) => props.theme.fontSizes.smaller};
    background: linear-gradient(
      90deg,
      rgba(133, 123, 225, 1) 0%,
      rgba(177, 127, 234, 1) 100%
    );
    border-radius: 5px;
    padding: 5px 8px;
    margin-right: 15px;
    text-align: center;
    max-width: 60px;
  }

  @media (max-width: 399px) {
    .card-info {
      flex-direction: column;
      align-items: start;
      gap: 15px;
    }
  }
`;

export default CardStyled;
