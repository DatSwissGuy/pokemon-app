import { SpeciesCollection } from '../collections/species-collection';
import { TypesCollection } from '../collections/types-collection';
import { VersionGroups } from '../collections/version-groups';
import { MainRegion } from '../main-region';

export interface Generation {
  id: number;
  main_region: MainRegion;
  name: string;
  pokemon_species: SpeciesCollection[];
  types: TypesCollection[];
  version_groups: VersionGroups[];
}
