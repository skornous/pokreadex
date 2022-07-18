import styled from "styled-components";
import { TypeKeysType, TYPES_KEYS, TYPE_COLOR_MAP } from "./PokeType.constants";

const isKeyOfTypeMap = (type: string): type is TypeKeysType => TYPES_KEYS.includes(type);

const getColorForType = (type: string) => {
  if (isKeyOfTypeMap(type)) {
    return TYPE_COLOR_MAP[type];
  } else {
    return "#fff";
  }
};

type TypeProps = { name: string };
export const PokeType = styled.div<TypeProps>`
  padding: 4px 8px;
  width: fit-content;
  border: 4px solid;
  border-color: ${({ name }) => getColorForType(name)};
  border-radius: 16px;
  font-size: 12px;
`;
