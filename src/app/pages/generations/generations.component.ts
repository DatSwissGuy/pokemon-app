import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { GenerationCollection } from '../../model/generation-collection';
import * as games4Generation from '../../data/games4generation.json';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {

  generationCollection: GenerationCollection[];

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.getGenerationCollection().subscribe(
      pokeApiResponse => this.generationCollection = pokeApiResponse.results
    );
  }

  formatGenerationName(generationName: string): string {
    const stringWithoutNumber = generationName.substring(0, 10);
    const uppercaseName = stringWithoutNumber.charAt(0).toUpperCase() + stringWithoutNumber.slice(1);
    const romanNumeralsUppercase = generationName.substring(11).toUpperCase();
    return `${uppercaseName} ${romanNumeralsUppercase}`;
  }

  // TODO find a more elegant solution...
  getGamesForGeneration(generationName: string): string {
    switch (generationName.substring(11)) {
      case 'i':
        return games4Generation.results[0].games;
      case 'ii':
        return games4Generation.results[1].games;
      case 'iii':
        return games4Generation.results[2].games;
      case 'iv':
        return games4Generation.results[3].games;
      case 'v':
        return games4Generation.results[4].games;
      case 'vi':
        return games4Generation.results[5].games;
      case 'vii':
        return games4Generation.results[6].games;
      case 'viii':
        return games4Generation.results[7].games;
    }
  }
}
