import { Component, inject } from '@angular/core';
import { RecetasServiciosService } from '../servicios/recetas-servicios.service';
import { Receta } from '../modelos/receta';

@Component({
  selector: 'app-listado-bocadillos',
  standalone: true,
  imports: [],
  templateUrl: './listado-bocadillos.component.html',
  styleUrl: './listado-bocadillos.component.css'
})
export class ListadoBocadillosComponent {
  recetasServiciosService = inject(RecetasServiciosService);

  recetas:Receta[] = [];

  ngOnInit(){
    this.recetas= this.recetasServiciosService.leerRecetas()
  }

  eliminarReceta(nombreReceta:string){
    this.recetasServiciosService.borrarReceta(nombreReceta);
    this.recetas= this.recetasServiciosService.leerRecetas()
  }
}
