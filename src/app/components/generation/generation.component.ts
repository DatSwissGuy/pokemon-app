import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { GenerationCollectionItem } from '../../model/generation-collection-item';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  generation: GenerationCollectionItem;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokeApiService.getGeneration(1).subscribe(
      pokeApiResponse => this.generation = pokeApiResponse
    );
  }
}
