import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { CommonModule } from '@angular/common';
import { Pizza as PizzaComponent } from './components/pizza/pizza';
import { Counter } from './components/counter/counter';
import { Author } from './components/author/author';
import { User } from './models/user';
import { PizzaService } from './services/pizza';
import { Message, MessageService } from './services/message';

@Component({
  selector: 'app-root',
  imports: [Author, CommonModule, Counter, PizzaComponent],
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

  constructor(
    private pizzaService: PizzaService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.pizzaService.getPizzas().then(r => this.pizzas = r)

    let that = this
    this.pizzaService.getPizzas().then(function (r) {
      that.pizzas = r
    })

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
}
