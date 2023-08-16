import styled from "styled-components";

const BurgerMenuStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  color: white;
  padding: 10px 0;

  a {
    padding-bottom: 2px;
  }

  .contact {
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    font-size: 12px;
  }

  .active {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.small};
    /* border-bottom: 1px solid ${(props) => props.theme.colors.primary}; */
  }

  .mobile-menu {
    &__btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 30px;
      cursor: pointer;
      transition: 0.1s;
    }

    &__icon {
      display: block;
      position: relative;
      background-color: ${(props) => props.theme.colors.primary};
      width: 90%;
      height: 4px;
      transition: 0.4s;

      &::after,
      &::before {
        content: "";
        display: block;
        position: absolute;
        background-color: ${(props) => props.theme.colors.primary};
        width: 100%;
        height: 4px;
        transition: 0.4s;
      }
      &::after {
        top: 8px;
      }
      &::before {
        top: -8px;
      }
    }

    &__container {
      position: absolute;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 70px;
      left: 0;
      right: 0;
      z-index: 999;
      height: 0;
      opacity: 1;
      transition: 0.3s;
      transition-delay: 0.2s;
      overflow: hidden;
      background-color: ${(props) => props.theme.colors.bg.primary};
      width: 100%;
    }

    &__list {
      transition: 0.5s;
      transition-delay: 0.5s;
      list-style: none;
      padding-left: 0;
      margin-top: -50px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__item {
      font-size: 26px;
      padding-bottom: 15px;
    }

    &__link {
      text-decoration: none;
    }

    &__checkbox {
      display: none;

      &:checked ~ {
        .mobile-menu {
          &__nav {
            opacity: 1;
            transition-delay: 0s;
          }

          &__container {
            height: 100vh;
            transition-delay: 0s;
          }

          &__btn {
            .mobile-menu__icon {
              background: transparent;

              &::before,
              &::after {
                top: 0;
              }

              &::after {
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
              }

              &::before {
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export default BurgerMenuStyled;
