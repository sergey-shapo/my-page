import { styled } from "styled-components";

const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.bg.secondary};

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
    border-bottom: 1px solid #3b3b3b;
    padding-bottom: 20px;
    font-size: clamp(13px, 5vw, 20px);
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
`;

export default CardStyled;
