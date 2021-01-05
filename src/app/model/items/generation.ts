import { SpeciesCollection } from '../collections/species-collection';
import { TypesCollection } from '../collections/types-collection';
import { VersionGroups } from '../collections/version-groups';

export interface Generation {
  id: number;
  main_region: object;
  name: string;
  pokemon_species: SpeciesCollection[];
  types: TypesCollection[];
  version_groups: VersionGroups[];
}
