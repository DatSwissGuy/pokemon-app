import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {

  generationCollection: object[];

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.getGenerationCollection().subscribe(
      pokeApiResponse => this.generationCollection = pokeApiResponse.results
    );
  }

  generationNameToUpperCase(generationString: string): string {
    const stringWithoutNumber = generationString.substring(0, 10);
    const uppercaseName = stringWithoutNumber.charAt(0).toUpperCase() + stringWithoutNumber.slice(1);
    const romanNumeralsUppercase = generationString.substring(11).toUpperCase();
    return `${uppercaseName} ${romanNumeralsUppercase}`;
  }
}
