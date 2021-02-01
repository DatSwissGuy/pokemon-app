import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { wordToUpperCase } from '../../helper-functions/name-to-uppercase';

@Component({
  selector: 'app-pokedexes',
  templateUrl: './pokedexes.component.html',
  styleUrls: ['./pokedexes.component.scss']
})
export class PokedexesComponent implements OnInit {

  pokedexCollection: any[];
  wordToUpperCase = wordToUpperCase;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.getPokedexCollection().subscribe(
      pokeApiResponse => this.pokedexCollection = pokeApiResponse.results
    );
  }
}
