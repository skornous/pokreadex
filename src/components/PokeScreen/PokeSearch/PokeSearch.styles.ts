import styled from "styled-components";
import { gVar } from "themthem";

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid;
  background: ${gVar("colors.white", "white")};
  border-color: ${gVar("colors.red", "red")};
  border-radius: 8px;
`;
