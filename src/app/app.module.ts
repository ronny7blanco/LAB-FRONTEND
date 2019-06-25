import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticulosService }  from './services/articulos.service';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    LoginComponent,
    PagesComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, APP_ROUTES,
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
