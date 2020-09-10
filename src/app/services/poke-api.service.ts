import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import {PokeApiResponse} from '../model/poke-api-response';
import {PokemonCollection} from '../model/pokemon-collection';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://pokeapi.co/api/v2';
  offset = 0;
  limit = 151;

  getPokemon(offset: number = this.offset, limit: number = this.limit): Observable<PokeApiResponse<PokemonCollection>> {
    const queryParams: string[] = [
      `offset=${offset}`,
      `limit=${limit}`
    ];
    return this.http
      .get<any>(`${this.baseUrl}/pokemon?${queryParams.join('&')}`)
      .pipe(
        map(response => response),
        take(1)
      );
  }
}

