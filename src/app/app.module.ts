import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonaComponent,
    PersonaDetailsComponent,
    PersonaListComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
