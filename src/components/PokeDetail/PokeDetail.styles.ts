import styled from "styled-components";
import { Panel } from "../Panel/Panel.styles";
import { DETAIL_CSS_VARS } from "./PokeDetail.constants";
import { PokeDetailHeader } from "./PokeDetailHeader/PokeDetailHeader.styles";
import { PokeDetailFooter } from "./PokeDetailFooter/PokeDetailFooter.styles";
import { PokeDetailScreen } from "./PokeDetailScreen/PokeDetailScreen";

export const DetailContainer = styled(Panel)`
  ${DETAIL_CSS_VARS};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding-left: 3rem;
  padding-right: 3rem;
`;
export const DetailHeader = styled(PokeDetailHeader)`
  margin: 0 auto;
  width: 400px;
`;
export const DetailScreen = styled(PokeDetailScreen)`
  margin: 20px 0;
`;
export const DetailFooter = styled(PokeDetailFooter)`
  margin: 0 auto;
`;
