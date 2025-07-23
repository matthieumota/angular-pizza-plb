import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { Counter } from '../../components/counter/counter';
import { Author } from '../../components/author/author';
import { Pizza as PizzaComponent } from '../../components/pizza/pizza';

@NgModule({
  declarations: [],
  imports: [
    Counter, Author, PizzaComponent
  ],
  exports: [AppRoutingModule, CommonModule, FormsModule, Counter, Author, PizzaComponent]
})
export class AppModule { }
