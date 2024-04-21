import { createGlobalStyle } from "styled-components";
import Vector from "../../images/Vector.png";
import { breakpoints } from "../styles/breakpoints";

export const GlobalStyles = createGlobalStyle`
body {
 padding:0;
  font-family: "Regular";
  letter-spacing: 0.04em;
  max-width: 100vw;
  height:auto;
  background-color:#F8F8F8;
  color: rgba(18, 20, 23, 0.80);
  font-size: 16px;
  line-height: 24px;
  
   @media screen and (min-width: ${breakpoints.tablet}) {
     padding: 24px 100px;
     background-image: url(${Vector});
     min-height: 100vh;
     background-repeat: no-repeat;
     background-size: 693px 597px;
     background-position: bottom right;
  }
  }`;
