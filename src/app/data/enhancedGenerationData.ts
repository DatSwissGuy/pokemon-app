// TODO finish or find a more elegant solution for Pokemon data (games, indexes, platforms...)
/**
 * URL points to the sprite of the boxart Pokémon of that particular game
 */
export const enhancedGenerationData = {
  1: {
    firstPokemon: 1,
    lastPokemon: 151,
    games: [
      {Red: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
      {Blue: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'},
      {Yellow: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
    ],
    platform: 'Game Boy'
  },
  2: {
    firstPokemon: 152,
    lastPokemon: 251,
    games: [
      {Silver: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png'},
      {Gold: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png'},
      {Crystal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png'}
    ],
    platform: 'Game Boy Color'
  },
  3: {
    firstPokemon: 252,
    lastPokemon: 386,
    games: [
      {Ruby: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png'},
      {Sapphire: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png'},
      {Emerald: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png'},
      {FireRed: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
      {LeafGreen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'}
    ],
    platform: 'Game Boy Advance'
  },
  4: {
    firstPokemon: 384,
    lastPokemon: 493,
    games: [
      {Diamond: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png'},
      {Pearl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png'},
      {Platinum: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png'},
      {HeartGold: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png'},
      {SoulSilver: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png'}
    ],
    platform: 'Game Boy Advance'
  },
  5: {
    firstPokemon: 494,
    lastPokemon: 649,
    games: [
      {Black: ''},
      {White: ''},
      {'Black 2': ''},
      {'White 2': ''}
    ],
    platform: 'Nintendo DS'
  },
  6: {
    firstPokemon: 650,
    lastPokemon: 721,
    games: [
      {X: ''},
      {Y: ''},
      {'Omega Ruby': ''},
      {'Alpha Sapphire': ''}
    ],
    platform: 'Nintendo 3DS'
  },
  7: {
    firstPokemon: 722,
    lastPokemon: 809,
    games: [
      {Sun: ''},
      {Moon: ''},
      {'Ultra Sun': ''},
      {'Ultra Moon': ''},
      {'Let\'s Go, Pickachu!': ''},
      {'Let\'s Go, Eevee!': ''}
    ],
    platform: ['Nintendo 3DS', 'Nintendo Switch']
  },
  8: {
    firstPokemon: 810,
    lastPokemon: 898,
    games: [
      {Sword: ''},
      {Shield: ''}
    ],
    platform: 'Nintendo Switch'
  }
};
