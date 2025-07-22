import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { CommonModule } from '@angular/common';
import { Pizza as PizzaComponent } from './components/pizza/pizza';
import { Counter } from './components/counter/counter';
import { Author } from './components/author/author';
import { User } from './models/user';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  imports: [Author, CommonModule, Counter, PizzaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title: string = 'Mon super site avec Angular';
  selected!: Pizza | null;
  pizzas: Pizza[] = PIZZAS;
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/12.jpg');

  onSelect(pizza: Pizza) {
    console.log(pizza);
    this.selected = { ...pizza };
  }

  onCancel(event: Pizza) {
    console.log(event)
    this.selected = null
  }
}
