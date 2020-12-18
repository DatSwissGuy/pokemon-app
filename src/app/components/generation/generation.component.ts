import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { GenerationCollectionItem } from '../../model/generation-collection-item';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  generation: GenerationCollectionItem;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.getGeneration(1).subscribe(
      pokeApiResponse => this.generation = pokeApiResponse
    );
  }

  nameToUpperCase(pokemonName: string): string {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }

  formatVersionGroups(versionGroups: GenerationCollectionItem): string {
    let gamesList = '';
    versionGroups.version_groups.forEach(games => gamesList += `${games.name.replace('-', ' ')} `);
    return gamesList;
  }

  getPokemonSvgUrl(pokemonUrl: string): string {
    return pokemonUrl
      .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world')
      .slice(0, -1)
      .concat('.svg');
  }
}