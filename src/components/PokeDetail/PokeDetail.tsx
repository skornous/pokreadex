import { DetailContainer } from "./PokeDetail.styles";

type PokeDetailProps = {
  className?: string;
};
export const PokeDetail = ({ className = "" }: PokeDetailProps) => (
  <DetailContainer className={className}></DetailContainer>
);
