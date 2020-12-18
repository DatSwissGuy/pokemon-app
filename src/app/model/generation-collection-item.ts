import { PokemonSpecies } from './pokemon-species';
import { PokemonTypes } from './pokemon-types';
import { VersionGroups } from './version-groups';

export interface GenerationCollectionItem {
  id: number;
  main_region: object;
  name: string;
  pokemon_species: PokemonSpecies[];
  types: PokemonTypes[];
  version_groups: VersionGroups[];
}
