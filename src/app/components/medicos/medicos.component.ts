import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Medico {
  nombre: string;
  especialidad: string;
  especialidadId: string;
  descripcion: string;
  imagen: string;
}

interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {

  especialidades: Especialidad[] = [
    {
      id: 'neural',
      nombre: 'Terapia Neural',
      descripcion: 'Terapia Neural: Tratamiento que utiliza técnicas de estimulación nerviosa para aliviar dolores y mejorar la función corporal.'
    },
    {
      id: 'quiropraxia',
      nombre: 'Quiropraxia',
      descripcion: 'Quiropraxia: Enfoque en el diagnóstico, tratamiento y prevención de trastornos del sistema musculoesquelético, especialmente de la columna vertebral.'
    },
    {
      id: 'fisioterapia',
      nombre: 'Fisioterapia',
      descripcion: 'Fisioterapia: Rehabilitación física que ayuda a recuperar la movilidad, reducir el dolor y mejorar la función corporal mediante ejercicios terapéuticos.'
    },
    {
      id: 'nutricion',
      nombre: 'Nutrición y Dietética',
      descripcion: 'Nutrición y Dietética: Asesoramiento nutricional personalizado para promover una alimentación saludable y equilibrada según las necesidades individuales.'
    }
  ];

  medicos: Medico[] = [
    {
      nombre: 'Dra. Luisa Fernanda Fernadezz',
      especialidad: 'Especialista en Quiropraxia',
      especialidadId: 'quiropraxia',
      descripcion: 'Especialista en el cuidado de la columna y el sistema musculoesquelético, enfocada en aliviar molestias y mejorar la movilidad.',
      imagen: 'assets/img/doctor1.jpg'
    },
    {
      nombre: 'Dr. Nicolas Rocha Gutierez',
      especialidad: 'Especialista en Terapia Neural',
      especialidadId: 'neural',
      descripcion: 'Orientado al manejo del dolor y a mejorar el bienestar general mediante la estimulación del sistema nervioso.',
      imagen: 'assets/img/doctor2.jpg'
    },
    {
      nombre: 'Dr. Luis Eduardo Fierro Ortiz',
      especialidad: 'Especialista en Fisioterapia',
      especialidadId: 'fisioterapia',
      descripcion: 'Enfocado en la recuperación de la movilidad, reducción del dolor y rehabilitación física integral.',
      imagen: 'assets/img/doctor3.jpg'
    },
    {
      nombre: 'Dr. Jose David Aranda Hurtado',
      especialidad: 'Especialista en Terapia Neural',
      especialidadId: 'neural',
      descripcion: 'Dedicado al tratamiento del dolor y a favorecer una mejor función del organismo mediante técnicas de estimulación nerviosa.',
      imagen: 'assets/img/doctor4.jpg'
    },
    {
      nombre: 'Dra. Angela Macarela Mendez Astudillo',
      especialidad: 'Especialista en Nutrición y Dietética',
      especialidadId: 'nutricion',
      descripcion: 'Brinda orientación personalizada para desarrollar hábitos alimenticios saludables y mejorar el bienestar.',
      imagen: 'assets/img/doctor5.jpg'
    },
    {
      nombre: 'Dr. Juan Pablo Parra Omen',
      especialidad: 'Especialista en Quiropraxia',
      especialidadId: 'quiropraxia',
      descripcion: 'Enfocado en el cuidado de la columna, la movilidad corporal y el alivio de molestias musculoesqueléticas.',
      imagen: 'assets/img/doctor6.jpg'
    }
  ];

  especialidadSeleccionada: Especialidad | null = null;

  mostrarEspecialidad(id: string): void {
    // Si se hace clic en la especialidad ya seleccionada, se deselecciona (muestra todos)
    if (this.especialidadSeleccionada?.id === id) {
      this.especialidadSeleccionada = null;
      return;
    }
    this.especialidadSeleccionada = this.especialidades.find(e => e.id === id) ?? null;
  }

  mostrarTodos(): void {
    this.especialidadSeleccionada = null;
  }

  get medicosFiltrados(): Medico[] {
    if (!this.especialidadSeleccionada) {
      return this.medicos;
    }
    return this.medicos.filter(m => m.especialidadId === this.especialidadSeleccionada!.id);
  }
}
