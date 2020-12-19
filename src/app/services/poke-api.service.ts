import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { PokeApiResponse } from '../model/poke-api-response';
import { PokemonCollection } from '../model/pokemon-collection';
import { GenerationCollection } from '../model/generation-collection';
import { GenerationCollectionItem } from '../model/generation-collection-item';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokeApi = 'https://pokeapi.co/api/v2';
  pokemonEndpoint = 'pokemon';
  generationEndpoint = 'generation';
  // Returns the first 251 Pokémon (Gen 1+2)
  offset = 0;
  limit = 251;

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

  getPokemon(queryParam: any, pokemonId: number): Observable<any> {
    const queryParams: string[] = [`param=${queryParam}`];
    return this.http.get<any>(`${this.pokeApi}/${this.pokemonEndpoint}/${pokemonId}?${queryParams.join('&')}`)
      .pipe(
        map(response => response),
        take(1)
      );
  }

  getGenerationCollection(): Observable<PokeApiResponse<GenerationCollection>> {
    return this.http.get<any>(`${this.pokeApi}/${this.generationEndpoint}`)
      .pipe(
        map(response => response),
        take(1)
      );
  }

  getGeneration(generationId: number): Observable<GenerationCollectionItem> {
    return this.http.get<any>(`${this.pokeApi}/${this.generationEndpoint}/${generationId}`)
      .pipe(
        map(response => response),
        take(1)
      );
  }
}
