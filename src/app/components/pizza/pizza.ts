import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza as PizzaModel } from '../../models/pizza';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  imports: [FormsModule],
  templateUrl: './pizza.html',
  styleUrl: './pizza.scss'
})
export class Pizza {
  @Input() selected!: PizzaModel;
  @Output() canceled = new EventEmitter<PizzaModel>();
}
