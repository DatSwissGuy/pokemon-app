import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationsComponent } from './pages/generations/generations.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { PokedexesComponent } from './pages/pokedexes/pokedexes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'generations/:id', component: PokemonListComponent},
  {path: 'pokedexes', component: PokedexesComponent}
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
