import { Component } from '@angular/core';
import { AppModule } from './modules/app/app-module';

@Component({
  selector: 'app-root',
  imports: [AppModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title: string = 'Mon super site avec Angular';
}
