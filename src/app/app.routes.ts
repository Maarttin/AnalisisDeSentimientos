import { Routes } from '@angular/router';
import { SentimentFormComponent } from './sentiment-form/sentiment-form.component';
export const routes: Routes = [
   { path: '', redirectTo: 'analizador', pathMatch: 'full' }, // ✅ redirección limpia
  { path: 'analizador', component: SentimentFormComponent },
  { path: '**', redirectTo: 'analizador' } // ✅ ruta wildcard para rutas desconocidas
];
