import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'contador-app';
}
