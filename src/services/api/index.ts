async function loadPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const { results } = await response.json()

  return results
}