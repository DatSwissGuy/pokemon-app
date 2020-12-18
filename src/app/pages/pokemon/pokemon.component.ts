import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonCollection } from '../../model/pokemon-collection';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonCollection: PokemonCollection[];

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.getPokemonCollection().subscribe(
      pokeApiResponse => this.pokemonCollection = pokeApiResponse.results
    );
  }

  pokemonNameToUpperCase(pokemonName: string): string {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }

  getPokemonSvgUrl(pokemonUrl: string): string {
    return pokemonUrl
        .replace('https://pokeapi.co/api/v2/pokemon', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world')
        .slice(0, -1)
        .concat('.svg');
  }
}
