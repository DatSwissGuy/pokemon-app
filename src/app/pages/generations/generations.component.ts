import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { GenerationCollection } from '../../model/generation-collection';
import { gamesForGeneration} from '../../data/gamesForGeneration';

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
        return gamesForGeneration.generationOne;
      case 'ii':
        return gamesForGeneration.generationTwo;
      case 'iii':
        return gamesForGeneration.generationThree;
      case 'iv':
        return gamesForGeneration.generationFour;
      case 'v':
        return gamesForGeneration.generationFive;
      case 'vi':
        return gamesForGeneration.generationSix;
      case 'vii':
        return gamesForGeneration.generationSeven;
      case 'viii':
        return gamesForGeneration.generationEight;
    }
  }
}
