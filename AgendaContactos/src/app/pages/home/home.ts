import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Contacto {
  name: string;
  phone: number | null;
  email: string;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  contacto: Contacto = {
    name: '',
    phone: null,
    email: ''
  };

  contactos: Contacto[] = [];

  guardarContacto() {
    if (this.contacto.name && this.contacto.phone && this.contacto.email.trim()) {

      // Agregar el contacto a la lista
      this.contactos.push({ ...this.contacto });
      // Limpiar el formulario
      this.contacto = { name: '', phone: 0, email: '' };

    }
  }
}
