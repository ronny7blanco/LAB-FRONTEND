import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './pages/home/home.component.hmtl',
  styleUrls: ['./pages/home/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private articulosService: ArticulosService ) { }
  
  articulos: any[] = [];

  ngOnInit() {
    this.articulos = this.articulosService.getArticulos();
    console.log(this.articulos);
  }

}