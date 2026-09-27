import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EnlaceNav {
  etiqueta: string;
  destino: string;
  activo?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  enlaces: EnlaceNav[] = [
    { etiqueta: 'Home', destino: '#', activo: true },
    { etiqueta: 'Sobre Nosotros', destino: '#seccion1' },
    { etiqueta: 'Médicos', destino: '#seccion2' },
    { etiqueta: 'Formulario de Registro', destino: '#seccion3' },
    { etiqueta: 'Contacto', destino: '#seccion4' }
  ];
}
