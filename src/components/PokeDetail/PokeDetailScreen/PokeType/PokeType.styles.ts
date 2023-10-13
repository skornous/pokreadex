import styled from "styled-components";
import { TypeKeysType, TYPES_KEYS, TYPE_COLOR_MAP } from "./PokeType.constants";

const isKeyOfTypeMap = (type: TypeKeysType | string): type is TypeKeysType =>
  TYPES_KEYS.includes(type as TypeKeysType);

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
  width: 30px;
  height: 30px;
  display: grid;
  place-content: center;
  border: 4px solid;
  border-color: ${({ name }) => getColorForType(name)};
  border-radius: 50%;
  font-size: 12px;
`;
