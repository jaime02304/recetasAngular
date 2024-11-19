import { Injectable } from '@angular/core';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasServiciosService {

  private recetas:Receta[]=[];

  aniadirReceta(receta:Receta){
    return this.recetas.push(receta);
  }

  leerRecetas(): Receta[]{
    return this.recetas;
  }

  borrarReceta(nombreRecetaABuscar:string){
    this.recetas= this.recetas.filter(nombre=>nombre.nombrereceta!==nombreRecetaABuscar);
  }
}
