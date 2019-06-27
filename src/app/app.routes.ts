import { Routes, RouterModule } from '@angular/router';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { NgModule } from '@angular/core';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';

const routes: Routes = [
    {path: '', redirectTo: 'persona', pathMatch: 'full'},
    {path: 'personas', component : PersonaListComponent},
    {path: 'add', component: CreatePersonaComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }