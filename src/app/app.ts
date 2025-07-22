import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { CommonModule } from '@angular/common';
import { Pizza as PizzaComponent } from './components/pizza/pizza';
import { Counter } from './components/counter/counter';
import { Author } from './components/author/author';
import { User } from './models/user';
import { PizzaService } from './services/pizza';
import { Message, MessageService } from './services/message';
import { filter, repeat, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Author, CommonModule, Counter, PizzaComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title: string = 'Mon super site avec Angular';
  selected!: Pizza | null;
  pizzas: Pizza[] = [];
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/12.jpg');
  total: number = 0
  messages: Message[] = []
  showNewPizza: boolean = false
  newPizza: Pizza = new Pizza(0, '', 0, '/assets/pizzas/cannibale.jpg')

  constructor(
    private pizzaService: PizzaService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
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

    this.messages = this.messageService.getMessages()
  }

  onSelect(pizza: Pizza) {
    console.log(pizza);
    this.selected = { ...pizza };
  }

  onCancel(event: Pizza) {
    console.log(event)
    this.selected = null
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index)
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
