import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { GenerationCollection } from '../../model/collections/generation-collection';
import { generationData } from '../../data/generationData';

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
    const nameWithoutNumber = generationName.substring(0, 10);
    const uppercaseName = nameWithoutNumber.charAt(0).toUpperCase() + nameWithoutNumber.slice(1);
    const romanNumeralsUppercase = generationName.substring(11).toUpperCase();
    return `${uppercaseName} ${romanNumeralsUppercase}`;
  }

  // TODO find a more elegant solution...
  getGamesForGeneration(generationName: string): string {
    switch (generationName.substring(11)) {
      case 'i':
        return generationData['1'].games.join(', ');
      case 'ii':
        return generationData['2'].games.join(', ');
      case 'iii':
        return generationData['3'].games.join(', ');
      case 'iv':
        return generationData['4'].games.join(', ');
      case 'v':
        return generationData['5'].games.join(', ');
      case 'vi':
        return generationData['6'].games.join(', ');
      case 'vii':
        return generationData['7'].games.join(', ');
      case 'viii':
        return generationData['8'].games.join(', ');
    }
  }
}
