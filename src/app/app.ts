import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title: string = 'Mon super site avec Angular';
  name: string = '4 fromages';
  pizza: Pizza = new Pizza(1, 'Reine', 12, '/assets/pizzas/reine.jpg');
  pizzas: Pizza[] = PIZZAS;
}
