import styled from "styled-components";
import { cssVariable } from "themthem";

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid;
  background: ${cssVariable("global", "colors", "white")};
  border-color: ${cssVariable("global", "colors", "red")};
  border-radius: 8px;
`;
