export const computePokemonId = (url: string): number => {
  const urlParts = url.split("/");
  return Number(urlParts[urlParts.length - 2]); // last part is always empty
};
