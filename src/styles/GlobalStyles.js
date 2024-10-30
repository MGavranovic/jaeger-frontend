import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };
const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
