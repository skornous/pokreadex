import { createContext } from "react";

export type PokeListCtxType = { page: number; setPage: (newPage: number) => void };
export const PokeListCtx = createContext<PokeListCtxType>({ page: 0, setPage: (_: number) => {} });
