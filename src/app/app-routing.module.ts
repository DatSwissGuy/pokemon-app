import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationsComponent } from './pages/generations/generations.component';
import { GenerationComponent } from './components/generation/generation.component';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
