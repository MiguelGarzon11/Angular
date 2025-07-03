import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
  valor: number = 0;

  incrementar() {
    this.valor++;
  }

  decrementar() {
    this.valor--;
  }

  resetear() {
    this.valor = 0;
  }
}


