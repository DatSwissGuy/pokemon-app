import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GenerationsComponent } from './pages/generations/generations.component';

const routes: Routes = [
  {path: '', component: PokemonComponent},
  {path: 'generations', component: GenerationsComponent}
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
