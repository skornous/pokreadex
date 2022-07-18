import { InformationsContainer, Informations } from "./PokemonInfos.styles";
import { PokeType } from "../PokeType/PokeType.styles";

import { Pokemon } from "../../../../api/generated.types";

type PokemonInfosProps = Pokemon & {
  className?: string;
};
export const PokemonInfos = ({ className = "", name, sprites, id, types }: PokemonInfosProps) => {
  return (
    <InformationsContainer className={className}>
      <Informations>
        <div style={{ display: "flex", gap: "4px", alignSelf: "start" }}>
          {types.map((type, i) => (
            <PokeType key={i} name={type.type.name}>
              {type.type.name.charAt(0).toUpperCase()}
            </PokeType>
          ))}
        </div>
        <img alt={`picture of ${name}`} src={sprites.front_default} />
        <span>N.{String(id).padStart(3, "0")}</span>
        <span>{name}</span>
      </Informations>
    </InformationsContainer>
  );
};
