import { Component } from '@angular/core';
import { generationData } from '../../data/generationData';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  generationData = generationData;

  constructor() {
  }
}
