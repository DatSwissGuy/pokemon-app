import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GenerationsComponent } from './pages/generations/generations.component';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { PokedexesComponent } from './pages/pokedexes/pokedexes.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    FooterComponent,
    PokemonListComponent,
    GamesComponent,
    HomeComponent,
    PokedexesComponent,
  ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatRippleModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
