import { Component } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { PizzaService } from '../../services/pizza';
import { filter, Observable, repeat, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pizza as PizzaComponent } from '../../components/pizza/pizza';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pizzas',
  imports: [CommonModule, FormsModule, PizzaComponent, RouterLink],
  templateUrl: './pizzas.html',
  styleUrl: './pizzas.scss'
})
export class Pizzas {
  selected!: Pizza | null;
  pizzas: Pizza[] = [];
  $pizzas!: Observable<Pizza[]>;
  showNewPizza: boolean = false
  newPizza: Pizza = new Pizza(0, '', 0, '/assets/pizzas/cannibale.jpg')

  constructor(
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    this.$pizzas = this.pizzaService.getPizzas()

    this.pizzaService.getPizzas().pipe(
      repeat(3),
      // map((pizzas: Pizza[]) => pizzas.filter(p => p.name !== 'Reine')),
      filter((p: Pizza[]) => this.pizzas.length < 3)
    ).subscribe(r => {
      console.log(r)
      this.pizzas = this.pizzas.concat(r)
    })

    this.pizzaService.events.pipe(
      filter(event => event === 'update'),
      switchMap(() => this.pizzaService.getPizzas())
    ).subscribe(pizzas => {
      this.pizzas = pizzas
    })

    // let that = this
    // this.pizzaService.getPizzas().subscribe(function (r) {
    //   that.pizzas = r
    // })
  }

  onSelect(pizza: Pizza) {
    console.log(pizza);
    this.selected = { ...pizza };
  }

  onCancel(event: Pizza) {
    console.log(event)
    this.selected = null
  }

  delete(event: Event, pizza: Pizza) {
    event.stopPropagation()

    if (!confirm('Voulez-vous vraiment supprimer cette pizza ?')) return

    this.pizzaService.deletePizza(pizza.id).subscribe(_ => {
      this.pizzas = this.pizzas.filter(p => p.id !== pizza.id)
    })
  }

  toggleNewPizza() {
    this.showNewPizza = !this.showNewPizza
  }

  save(event: KeyboardEvent) {
    if (event.key !== 'Enter') return

    if (!this.newPizza.name || !this.newPizza.price) return

    this.pizzaService.createPizza(this.newPizza).pipe(
      switchMap(() => this.pizzaService.getPizzas())
    ).subscribe(pizzas => {
      this.pizzas = pizzas
      this.toggleNewPizza()
      this.newPizza = new Pizza(0, '', 0, '/assets/pizzas/cannibale.jpg')
    })

    // this.pizzaService.createPizza(this.newPizza).subscribe(_ => {
    //   this.toggleNewPizza()
    //   this.newPizza = new Pizza(0, '', 0, '/assets/pizzas/cannibale.jpg')
    //   this.pizzaService.getPizzas().subscribe(pizzas => {
    //     this.pizzas = pizzas
    //   })
    // })
  }
}
