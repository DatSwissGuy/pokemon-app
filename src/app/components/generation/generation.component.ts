import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { Generation } from '../../model/items/generation';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  generation: Generation;

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

  formatVersionGroups(versionGroups: Generation): string {
    let versionGroupsString = '';
    versionGroups.version_groups.map(games => versionGroupsString += `${games.name.replace('-', ' ')} `);
    const gamesArray = versionGroupsString.split(' ').map(games => this.nameToUpperCase(games));
    const gamesList = gamesArray.join(', ');
    // remove last commma and space
    return gamesList.slice(0, -2);
  }

  getPokemonSvgUrl(pokemonUrl: string): string {
    return pokemonUrl
      .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world')
      .slice(0, -1)
      .concat('.svg');
  }
}
