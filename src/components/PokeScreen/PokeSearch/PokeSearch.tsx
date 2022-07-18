import { useState } from "react";
import { SearchInput } from "./PokeSearch.styles";

type PokeSearchProps = {
  className?: string;
};
export const PokeSearch = ({ className = "" }: PokeSearchProps) => {
  const [search, setSearch] = useState("");
  const handleSearchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return <SearchInput className={className} value={search} onChange={handleSearchUpdate} />;
};
