import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  resetear() {
    this.contador = 0;
  }

}
