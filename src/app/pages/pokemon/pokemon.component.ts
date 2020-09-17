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
}
