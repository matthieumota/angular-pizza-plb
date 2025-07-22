import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza as PizzaModel } from '../../models/pizza';
import { FormsModule } from '@angular/forms';
import { PizzaService } from '../../services/pizza';

@Component({
  selector: 'app-pizza',
  imports: [FormsModule],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss'
})
export class Pizza {
  @Input() selected!: PizzaModel;
  @Output() canceled = new EventEmitter<PizzaModel>();

  constructor(private pizzaService: PizzaService) {
    console.log('CONSTRUCTOR', this.selected)
  }

  ngOnInit() {
    console.log('ngOnInit', this.selected)
  }

  save() {
    this.pizzaService.updatePizza(this.selected).subscribe(() => {
      this.pizzaService.events.next('update')
      this.canceled.emit(this.selected)
    })
  }
}
