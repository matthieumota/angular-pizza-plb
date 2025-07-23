import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  events = new Subject<string>()

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('/api/pizzas');
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`/api/pizzas/${id}`)
  }

  deletePizza(id: number): Observable<void> {
    return this.http.delete<void>(`/api/pizzas/${id}`)
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, pizza)
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${pizza.id}`, pizza)
  }
}
