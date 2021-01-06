import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GenerationsComponent } from './pages/generations/generations.component';
import { GenerationComponent } from './components/generation/generation.component';

const routes: Routes = [
  {path: '', component: PokemonComponent},
  {path: 'generations', component: GenerationsComponent},
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
