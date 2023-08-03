import { styled } from "styled-components";

const CardStyled = styled.div`
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
  }

  .card-info {
    border-bottom: 1px solid #3b3b3b;
    padding-bottom: 20px;

    /* line-height: 2; */
  }

  .year {
    font-size: ${(props) => props.theme.fontSizes.smaller};
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
    text-align: center;
    max-width: 60px;
  }

  @media screen and (max-width: 1050px) {
    .card-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    h2 {
      padding: 0;
    }

    gap: 12px;
  }
`;

export default CardStyled;
