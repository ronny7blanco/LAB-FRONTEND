import { Component, OnInit } from '@angular/core';
import { Personas } from '../persona';
import { PersonasServices } from '../personas.services';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css']
})
export class CreatePersonaComponent implements OnInit {
  
  persona: Personas = new Personas();
  submitted = false;


  constructor(private personaService: PersonasServices) { }

  ngOnInit() {
  }

  newPersona(): void {
    this.submitted = false;
    this.persona = new Personas();
  }

  save(){
    this.personaService.createPersonas(this.persona)
     .subscribe(data => console.log(data), error => console.log(error));
    this.persona = new Personas();
    }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
}
