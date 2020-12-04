export interface GenerationCollectionItem<T1, T2, T3> {
  id: number;
  main_region: object;
  name: string;
  pokemon_species: T1[];
  types: T2[];
  version_groups: T3[];
}
