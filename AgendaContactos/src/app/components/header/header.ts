import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Al importarlo me permite llamar a cada una de las paginas sin cargar.

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
