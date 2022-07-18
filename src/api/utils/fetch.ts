const getFromCache = <T extends any>(path: string): T | null => {
  const cache = localStorage.getItem("cache");
  // shortcut: empty cache
  if (!cache) return null;

  const cacheObj: Record<string, any> = JSON.parse(cache);
  return (cacheObj[path] as T) ?? null;
};

const saveInCache = (path: string, data: unknown): void => {
  const cache = localStorage.getItem("cache");
  const cacheObj = cache ? JSON.parse(cache) : {};

  cacheObj[path] = data;

  localStorage.setItem("cache", JSON.stringify(cacheObj));
};

/**
 * Fetch that uses localStorage to avoid re-fetching data even when reloading the page.
 * N.B.: This fetch does not handle network errors.
 */
type FetchOptions = RequestInit & { query: any };
export const fetch = async <T extends any>(uri: string, options?: FetchOptions): Promise<T> => {
  const { query = {}, ...fetchOptions } = options ?? {};
  // short for query string
  const qs = new URLSearchParams({ ...query });
  const uriWithQS = `${uri}?${qs}`;

  try {
    const cachedData = getFromCache<T>(uriWithQS);
    // shortcut: data from cache
    if (cachedData) return cachedData;
  } catch (e) {
    console.error(`Failed to retrieve data from cache for key "${uriWithQS}"`);
    console.error(e);
  }

  const data = await (await window.fetch(uriWithQS, fetchOptions)).json();

  try {
    saveInCache(uriWithQS, data);
  } catch (e) {
    console.error(`Failed to cache data "${JSON.stringify(data)}" using key "${uriWithQS}"`);
    console.error(e);
  }

  return data as T;
};

/**
 * Fetch that uses localStorage to avoid re-fetching data even when reloading the page.
 * A quick dirty gql-like fetcher to avoid using apollo for 1 request
 * N.B.: This fetch does not handle network errors.
 */
type GqlOptions = RequestInit & { query: { regex: string } };
export const gqlFetch = async <T extends any>(uri: string, options?: GqlOptions): Promise<T> => {
  const { query, ...fetchOptions } = options ?? {};
  if (!query?.regex) throw new Error("gqlFetch expects a search term");
  const gqlQuery = `query SearchPokemons($_regex: String) {pokemon_v2_pokemon(where: {name: {_regex: $_regex}}) {name id}}`;
  const queryAsQS = `query=SearchPokemons&name=${query.regex}`;
  const uriWithQS = `${uri}?${queryAsQS}`;

  try {
    const cachedData = getFromCache<T>(uriWithQS);
    // shortcut: data from cache
    if (cachedData) return cachedData;
  } catch (e) {
    console.error(`Failed to retrieve data from cache for key "${uriWithQS}"`);
    console.error(e);
  }

  const data = await (
    await window.fetch(uri, {
      ...fetchOptions,
      ...{
        method: "POST",
        body: JSON.stringify({
          operationName: "SearchPokemons",
          query: gqlQuery,
          variables: { _regex: query.regex },
        }),
      },
    })
  ).json();

  try {
    saveInCache(uriWithQS, data);
  } catch (e) {
    console.error(`Failed to cache data "${JSON.stringify(data)}" using key "${uriWithQS}"`);
    console.error(e);
  }

  return data as T;
};
