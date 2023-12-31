import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.bg.primary};
  min-height: 100wh;
  overflow: hidden;
`;

export default ContainerStyled;
