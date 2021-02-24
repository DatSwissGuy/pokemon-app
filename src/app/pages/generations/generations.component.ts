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
          '../../../assets/boxart/Red_EN_boxart.png',
          '../../../assets/boxart/Blue_EN_boxart.png',
          '../../../assets/boxart/Yellow_EN_boxart.png'
        ];
      case 'ii': return [
        '../../../assets/boxart/Silver_EN_boxart.png',
        '../../../assets/boxart/Gold_EN_boxart.png',
        '../../../assets/boxart/Crystal_EN_boxart.png'
      ];
      case 'iii': return [
        '../../../assets/boxart/Ruby_EN_boxart.png',
        '../../../assets/boxart/Sapphire_EN_boxart.png',
        '../../../assets/boxart/Emerald_EN_boxart.png',
        '../../../assets/boxart/FireRed_EN_boxart.png',
        '../../../assets/boxart/LeafGreen_EN_boxart.png'
      ];
      case 'iv': return [
        '../../../assets/boxart/Diamond_EN_boxart.png',
        '../../../assets/boxart/Pearl_EN_boxart.png',
        '../../../assets/boxart/Platinum_EN_boxart.png',
        '../../../assets/boxart/HeartGold_EN_boxart.png',
        '../../../assets/boxart/SoulSilver_EN_boxart.png'
      ];
      case 'v': return [
        '../../../assets/boxart/Black_EN_boxart.png',
        '../../../assets/boxart/White_EN_boxart.png',
        '../../../assets/boxart/Black2_EN_boxart.png',
        '../../../assets/boxart/White_2_EN_boxart.png'
      ];
      case 'vi': return [
        '../../../assets/boxart/X_EN_boxart.png',
        '../../../assets/boxart/Y_EN_boxart.png',
        '../../../assets/boxart/OmegaRuby_EN_boxart.png',
        '../../../assets/boxart/AlphaSapphire_EN_boxart.png'
      ];
      case 'vii': return [
        '../../../assets/boxart/Sun_EN_boxart.png',
        '../../../assets/boxart/Moon_EN_boxart.png',
        '../../../assets/boxart/UltraSun_EN_boxart.png',
        '../../../assets/boxart/UltraMoon_EN_boxart.png',
        '../../../assets/boxart/LetsGoPikachu_EN_boxart.png',
        '../../../assets/boxart/LetsGoEevee_EN_boxart.png',
      ];
      case 'viii': return [
        '../../../assets/boxart/Sword_EN_boxart.png',
        '../../../assets/boxart/Shield_EN_boxart.png'
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
