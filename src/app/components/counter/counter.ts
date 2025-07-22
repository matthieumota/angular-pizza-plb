import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../../services/message';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  @Input() value: number = 0
  @Output() changed = new EventEmitter<number>()

  constructor(private messageService: MessageService) {}

  ngOnInit() { // Permet de bien initialiser le total
    this.changed.emit(this.value)
  }

  ngOnDestroy() { // Si le compteur est supprimé, on supprime sa valeur du total
    this.changed.emit(-this.value)
  }

  increment(v: number) {
    this.value += v
    this.changed.emit(v)
    this.messageService.addMessage({
      message: `Le compteur a été modifié de ${v}`,
      type: 'success'
    })
  }
}
