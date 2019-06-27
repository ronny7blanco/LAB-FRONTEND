import { Component, OnInit, Input } from '@angular/core';
import { Personas } from '../persona';
import { PersonasServices } from '../personas.services';
import { PersonaListComponent } from '../persona-list/persona-list.component';

@Component({
  selector: 'app-persona-details',
  templateUrl: './persona-details.component.html',
  styleUrls: ['./persona-details.component.css']
})
export class PersonaDetailsComponent implements OnInit {

  @Input() persona: Personas;

  constructor(private personaService: PersonasServices, private listComponent: PersonaListComponent) { }

  ngOnInit() {
  }

}
