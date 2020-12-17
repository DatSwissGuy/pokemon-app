export interface GenerationCollectionItem<T1, T2, T3> {
  id: number;
  main_region: object;
  name: string;
  pokemon_species: PokemonSpecies[];
  types: PokemonTypes[];
  version_groups: VersionGroups[];
}
