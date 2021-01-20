import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { reducer } from './state/app.reducer'
import { AppEffects } from './state/app.effect';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ reducer }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
