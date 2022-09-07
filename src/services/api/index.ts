export async function loadPokemon(offset: number = 20) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
  const { results, count } = await response.json()

  return {results, count}
}

export async function getPokemonData(url: string) {
  const resp = await fetch(url)
  return await resp.json()
}