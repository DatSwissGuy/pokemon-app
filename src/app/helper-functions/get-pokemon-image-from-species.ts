/**
 * This helper function returns a URL containing the artwork image
 * @param pokemonId The ID of the Pokemon from the Pokemon Species Endpoint of the PokeAPI
 */

export function getPokemonArtworkImageFromSpecies(pokemonId: string): string {
  return pokemonId
    .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork')
    .slice(0, -1)
    .concat('.png');
}
