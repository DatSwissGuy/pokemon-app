import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { Generation } from '../../model/items/generation';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  generationId: number;
  generation: Generation;

  constructor(
    private pokeApiService: PokeApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.generationId = +this.route.snapshot.paramMap.get('id');
    this.pokeApiService.getGeneration(this.generationId).subscribe(
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

  formatGenerationName(generationName: string): string {
    return generationName.replace('generation-', '').toUpperCase();
  }

  getPokemonDreamworldImage(pokemonUrl: string): string {
    return pokemonUrl
      .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world')
      .slice(0, -1)
      .concat('.svg');
  }

  getPokemonArtworkImage(pokemonUrl: string): string {
    return pokemonUrl
      .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork')
      .slice(0, -1)
      .concat('.png');
  }
}
