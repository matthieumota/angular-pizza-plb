import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../../pages/home/home';
import { Pizzas } from '../../pages/pizzas/pizzas';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'pizzas', component: Pizzas }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
