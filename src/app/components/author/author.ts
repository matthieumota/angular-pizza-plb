import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author',
  imports: [FormsModule],
  templateUrl: './author.html',
  styleUrl: './author.scss'
})
export class Author {
  @Input() author!: User
  showAvatar: boolean = true

  toggleAvatar() {
    this.showAvatar = !this.showAvatar
  }
}
