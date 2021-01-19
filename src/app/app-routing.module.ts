import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationsComponent } from './pages/generations/generations.component';
import { GenerationComponent } from './components/generation/generation.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'generations/:id', component: GenerationComponent}
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
