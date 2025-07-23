import { Component, Input } from '@angular/core';
import { Counter } from '../../components/counter/counter';
import { CommonModule } from '@angular/common';
import { Message, MessageService } from '../../services/message';
import { Author } from '../../components/author/author';
import { User } from '../../models/user';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [Counter, CommonModule, Author, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @Input() total: number = 0
  messages: Message[] = []
  user = new User('Mota', 'Fiorella', '2019-12-31', 'https://randomuser.me/api/portraits/women/12.jpg');
  apiUrl = environment.apiUrl

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages()
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index)
  }

  authUser = {
    username: '',
    password: '',
  }

  login(userForm: NgForm) {
    console.log(userForm)
    if (userForm.invalid) return

    // Faire un service Auth
    // Appeller une méthode login
    // en passant authUser et en appellant l'API
    // Si c'est ok, le service change un booléen en true
    console.log(userForm.value, this.authUser)
  }
}
