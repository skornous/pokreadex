import { createComponentCSSVariablesGenerator } from "themthem";

const cssVarGen = createComponentCSSVariablesGenerator("DetailPanel");

export const DETAIL_CSS_VARS = cssVarGen({
  "border-color": "#000",
});
