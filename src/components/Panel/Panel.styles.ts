import styled from "styled-components";
import { cssVariable } from "themthem";

export const Panel = styled.div`
  background-color: ${cssVariable("global", "colors", "red")};
  border: 1px solid ${cssVariable("global", "border-colors", "gray")};
  padding: 2rem 1rem;
  overflow: hidden;
`;
