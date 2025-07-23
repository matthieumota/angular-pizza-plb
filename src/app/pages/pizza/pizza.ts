import { Component } from '@angular/core';
import { PizzaService } from '../../services/pizza';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { Pizza as PizzaModel } from '../../models/pizza'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza',
  imports: [CommonModule, RouterLink],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss'
})
export class Pizza {
  pizza!: PizzaModel
  loading: boolean = true

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      tap(() => this.loading = true), // avant de faire la requête
      switchMap(params => this.pizzaService.getPizza(params['id'])),
      delay(2000)
    ).subscribe(pizza => {
      if (!pizza) {
        this.router.navigateByUrl('/pizzas')
      }

      this.pizza = pizza
      this.loading = false
    })
  }
}
