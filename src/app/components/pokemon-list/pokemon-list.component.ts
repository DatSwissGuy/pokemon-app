import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { Generation } from '../../model/items/generation';
import { wordToUpperCase } from '../../helper-functions/name-to-uppercase';
import { getPokemonArtworkImageFromSpecies } from '../../helper-functions/get-pokemon-image-from-species';

@Component({
  selector: 'app-generation',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  generationId: number;
  generation: Generation;
  wordToUpperCase = wordToUpperCase;
  getPokemonImage = getPokemonArtworkImageFromSpecies;

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

  formatVersionGroups(versionGroups: Generation): string {
    let versionGroupsString = '';
    versionGroups.version_groups.map(games => versionGroupsString += `${games.name.replace('-', ' ')} `);
    const gamesArray = versionGroupsString.split(' ').map(games => this.wordToUpperCase(games));
    const gamesList = gamesArray.join(', ');
    // remove last commma and space
    return gamesList.slice(0, -2);
  }

  formatGenerationName(generationName: string): string {
    return generationName.replace('generation-', '').toUpperCase();
  }

  getPokemonSprite(pokemonUrl: string): string {
    return pokemonUrl
      .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon')
      .slice(0, -1)
      .concat('.png');
  }

  getPokemonDreamworldImage(pokemonUrl: string): string {
    return pokemonUrl
      .replace('https://pokeapi.co/api/v2/pokemon-species', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world')
      .slice(0, -1)
      .concat('.svg');
  }
}

