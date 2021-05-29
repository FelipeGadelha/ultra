import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export const GlobalContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

interface ButtonProps {
  primary: boolean;
  big?: boolean;
  fontBig?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${({primary}) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({big}) => (big ? "12px 64px" : "10px 20px")};
  color: #FFF;
  font-size: ${({fontBig}) => (fontBig ? "20px": "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #FFF;
    background: ${({primary}) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;