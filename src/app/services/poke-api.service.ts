import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { PokeApiResponse } from '../model/poke-api-response';
import { PokemonCollection } from '../model/pokemon-collection';
import { PokemonItem } from '../model/pokemon-item';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokeApi = 'https://pokeapi.co/api/v2';
  pokemonEndpoint = `pokemon`;
  // Returns the first 151 PoKémon (Red, Blue, Yellow)
  offset = 0;
  limit = 151;

  constructor(private http: HttpClient) {
  }

  getPokemonCollection(offset: number = this.offset, limit: number = this.limit): Observable<PokeApiResponse<PokemonCollection>> {
    const queryParams: string[] = [`offset=${offset}`, `limit=${limit}`];
    return this.http.get<PokeApiResponse<PokemonCollection>>(`${this.pokeApi}/${this.pokemonEndpoint}?${queryParams.join('&')}`)
      .pipe(
        map(response => response),
        take(1)
      );
  }

  getPokemon(queryParam: any, pokemonId: number): Observable<PokeApiResponse<PokemonItem>> {
    const queryParams: string[] = [`param=${queryParam}`];
    return this.http.get<any>(`${this.pokeApi}/${this.pokemonEndpoint}/${pokemonId}?${queryParams.join('&')}`)
      .pipe(
        map(response => response),
        take(1)
      );
  }
}

