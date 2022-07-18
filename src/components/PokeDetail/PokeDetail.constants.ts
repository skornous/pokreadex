import { createCSSVariablesGenerator } from "themthem";

const cssVarGen = createCSSVariablesGenerator("DetailPanel");

export const DETAIL_CSS_VARS = cssVarGen({
  "border-color": "#000",
});
