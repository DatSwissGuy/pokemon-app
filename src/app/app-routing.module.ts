import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { GenerationComponent } from './components/generation/generation.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {path: '', component: PokemonComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'generations/1', component: GenerationComponent},
  {path: 'games', component: GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
