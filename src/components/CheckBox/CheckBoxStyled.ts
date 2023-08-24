import styled from "styled-components";
const CheckBoxStyled = styled.div`
  /* :root {
    --white: #f0f0f0;
    --light-grey: #e4e4e4;
    --black: #111111;
    --dark-grey: #272727;
    --bg: var(--white);
    --txt: var(--black);
    --dark-opacity: 0;
    --light-opacity: 1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */

  .content {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
  }

  .checkbox {
    display: none;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    border-radius: 5rem;
    height: 22px;
    width: 35px;
    cursor: pointer;
    z-index: 1;
    transition: background 0.5s ease;
    position: relative;
  }

  .label .ball {
    position: absolute;
    left: 3.5px;
    height: 18px;
    width: 17px;
    background: white;
    border-radius: 50%;
    transform: translateX(0);
    transition: transform 0.3s ease, background 0.5s ease;
  }

  .checkbox:checked + .content .label .ball {
    transform: translateX(10px);
  }

  .checkbox:checked + .content .label {
    background-color: black;
  }

  .checkbox:checked + .content .label .ball {
    background-color: white;
  }
  .checkbox:not(:checked) + .content .label .ball {
    background-color: black;
  }
  .checkbox:not(:checked) + .content .label {
    background-color: white;
  }
`;
export default CheckBoxStyled;
