import { useContext, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { PokeListCtx } from "../../App/App.contexts";
import { SearchInput } from "./PokeSearch.styles";

type PokeSearchProps = {
  className?: string;
};
export const PokeSearch = ({ className = "" }: PokeSearchProps) => {
  const { setSearch } = useContext(PokeListCtx);
  const [searchInputValue, setSearchInputValue] = useState("");
  const handleSearchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
  };
  const debouncedInputValue = useDebounce(searchInputValue, 200);

  useEffect(() => {
    setSearch(debouncedInputValue);
  }, [debouncedInputValue]);

  return (
    <SearchInput className={className} value={searchInputValue} onChange={handleSearchUpdate} />
  );
};
