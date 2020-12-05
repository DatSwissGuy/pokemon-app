import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { GenerationCollection } from '../../model/generation-collection';
import { games4generation} from '../../data/games4generation';

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
        return games4generation.generation1;
      case 'ii':
        return games4generation.generation2;
      case 'iii':
        return games4generation.generation3;
      case 'iv':
        return games4generation.generation4;
      case 'v':
        return games4generation.generation5;
      case 'vi':
        return games4generation.generation6;
      case 'vii':
        return games4generation.generation7;
      case 'viii':
        return games4generation.generation8;
    }
  }
}
