import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Diapositiva {
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  diapositivas: Diapositiva[] = [
    {
      imagen: 'assets/img/carrusel1.jpg',
      titulo: 'Clínica Piedra Verde',
      descripcion: 'Ofrecemos servicios médicos de calidad con atención personalizada'
    },
    {
      imagen: 'assets/img/carrusel2.jpg',
      titulo: 'Clínica Piedra Verde',
      descripcion: 'Atención de Lunes a Viernes'
    },
    {
      imagen: 'assets/img/carrusel3.jpg',
      titulo: 'Clínica Piedra Verde',
      descripcion: 'Ubicados en el kilómetro 5, vía al Huila, Popayán'
    }
  ];
}
