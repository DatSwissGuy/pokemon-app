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

  getGamesForGeneration(generationName: string): string {
    switch (generationName) {
      case 'generation-i':
        return games4Generation['generation-i'].valueOf();
      case 'generation-ii':
        return games4Generation['generation-ii'].valueOf();
      case 'generation-iii':
        return games4Generation['generation-iii'].valueOf();
      case 'generation-iv':
        return games4Generation['generation-iv'].valueOf();
      case 'generation-v':
        return games4Generation['generation-v'].valueOf();
      case 'generation-vi':
        return games4Generation['generation-vi'].valueOf();
      case 'generation-vii':
        return games4Generation['generation-vii'].valueOf();
      case 'generation-viii':
        return games4Generation['generation-viii'].valueOf();
    }
  }
}
