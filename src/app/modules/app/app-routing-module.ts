import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../../pages/home/home';
import { Pizzas } from '../../pages/pizzas/pizzas';
import { Pizza } from '../../pages/pizza/pizza';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'pizzas', component: Pizzas },
  { path: 'pizzas/:id', component: Pizza }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
