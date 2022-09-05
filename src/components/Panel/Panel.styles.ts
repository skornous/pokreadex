import styled from "styled-components";
import { gVar } from "themthem";

export const Panel = styled.div`
  background-color: ${gVar("colors.red", "red")};
  border: 1px solid ${gVar("border-colors.gray", "gray")};
  padding: 2rem 1rem;
  overflow: hidden;
`;
