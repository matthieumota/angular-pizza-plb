import { Component } from '@angular/core';
import { Counter } from '../../components/counter/counter';
import { CommonModule } from '@angular/common';
import { Message, MessageService } from '../../services/message';
import { Author } from '../../components/author/author';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  imports: [Counter, CommonModule, Author],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  total: number = 0
  messages: Message[] = []
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/12.jpg');

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages()
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index)
  }
}
