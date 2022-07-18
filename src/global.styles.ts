import { createGlobalStyle } from "styled-components";
import { cssVariable, generateGlobalCSSVariables } from "themthem";

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
    ${cssVariable("global", "transition", "slow", { bare: true })}: 600ms;
    ${cssVariable("global", "transition", "normal", { bare: true })}: 300ms;
    ${cssVariable("global", "transition", "fast", { bare: true })}: 150ms;
  }
  @media (prefers-reduced-motion: reduce) {
    ${cssVariable("global", "transition", "slow", { bare: true })}: 0ms;
    ${cssVariable("global", "transition", "normal", { bare: true })}: 0ms;
    ${cssVariable("global", "transition", "fast", { bare: true })}: 0ms;
  }
}

body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
`;
