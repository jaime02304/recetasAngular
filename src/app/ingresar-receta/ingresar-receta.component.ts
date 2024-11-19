import { Component, inject } from '@angular/core';
import { RecetasServiciosService } from '../servicios/recetas-servicios.service';
import { Receta } from '../modelos/receta';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ingresar-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingresar-receta.component.html',
  styleUrl: './ingresar-receta.component.css'
})
export class IngresarRecetaComponent {

    // Formulario para crear un cliente nuevo
    recetasServiciosService = inject(RecetasServiciosService);
    receta: Receta = {
      nombrereceta:'',
      ingredientes: '',
      foto: '',
      pasosReceta: ''
    };
  
    aniadirReceta() {
      console.log(this.receta);
      this.recetasServiciosService.aniadirReceta(this.receta);
      this.receta = {
        nombrereceta:'',
        ingredientes: '',
        foto: '',
        pasosReceta: ''
      };
    }


}
