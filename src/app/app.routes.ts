import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/app/app-module').then(m => m.AppModule) },
];
