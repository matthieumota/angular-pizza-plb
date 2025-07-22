import { Injectable } from '@angular/core';

export interface Message {
  message: string
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = []

  getMessages(): Message[] {
    return this.messages
  }

  addMessage(message: Message): void {
    this.messages.push(message)
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1)
  }
}
