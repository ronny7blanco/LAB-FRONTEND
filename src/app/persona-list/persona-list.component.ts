import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../persona';
import { PersonasServices } from '../personas.services';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personas: Observable<Personas[]>;
  
  constructor(private personaService: PersonasServices) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.personas = this.personaService.getPersonasList();
  }

  deletePersonas(id: number){
    this.personaService.deletePersonas(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
