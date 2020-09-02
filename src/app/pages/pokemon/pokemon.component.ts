import { Component, OnInit } from '@angular/core';
import {PokeApiService} from '../../services/poke-api.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  pokeApiResponse: any;

  ngOnInit(): void {
    this.pokeApiService.getPokemon().subscribe(
      response => this.pokeApiResponse = response
    );
  }

}
