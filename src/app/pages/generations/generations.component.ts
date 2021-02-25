import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service'; import { GenerationCollection } from '../../model/collections/generation-collection';
import { generationData } from '../../data/generationData';
import { enhancedGenerationData } from '../../data/enhancedGenerationData';

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

  returnBoxartForGeneration(generationName: string): string[] {
    switch (generationName.substring(11)) {
      case 'i':
        return [
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        ];
      case 'ii': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png'
      ];
      case 'iii': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      ];
      case 'iv': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
      ];
      case 'v': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646-black.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646-white.png'
      ];
      case 'vi': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png'
      ];
      case 'vii': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
      ];
      case 'viii': return [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png'

      ];
    }
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
