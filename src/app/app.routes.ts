import { Routes } from '@angular/router';
import { ListadoBocadillosComponent } from './listado-bocadillos/listado-bocadillos.component';
import { IngresarRecetaComponent } from './ingresar-receta/ingresar-receta.component';

export const routes: Routes = [
    {path: 'listadoRecetas', component:ListadoBocadillosComponent},
    {path: 'nuevaReceta' , component:IngresarRecetaComponent}

];
