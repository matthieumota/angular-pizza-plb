import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  getPizzas(): Promise<Pizza[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PIZZAS), 300);
    });
  }
}
