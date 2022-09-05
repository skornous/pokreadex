import { createGlobalStyle } from "styled-components";
import { generateGlobalCSSVariables, gIdentifier } from "themthem";

const globalCSSVariables = generateGlobalCSSVariables({
  colors: {
    red: "#D03939",
    black: "#202124",
    white: "#F8F8F8",
  },
  "border-colors": {
    black: "#484047",
    gray: "#6D7D97",
  },
});

export const GlobalStyles = createGlobalStyle`
:root {
  ${globalCSSVariables}
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;

  @media (prefers-reduced-motion: no-preference) {
    ${gIdentifier("transition.slow")}: 600ms;
    ${gIdentifier("transition.normal")}: 300ms;
    ${gIdentifier("transition.fast")}: 150ms;
  }
  @media (prefers-reduced-motion: reduce) {
    ${gIdentifier("transition.slow")}: 0ms;
    ${gIdentifier("transition.normal")}: 0ms;
    ${gIdentifier("transition.fast")}: 0ms;
  }
}

body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
`;
