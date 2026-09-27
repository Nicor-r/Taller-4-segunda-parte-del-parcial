import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DatosRegistro {
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  genero: string;
  fechaNacimiento: string;
}

interface ErroresRegistro {
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  genero: string;
  fechaNacimiento: string;
}

@Component({
  selector: 'app-registro-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-form.component.html',
  styleUrl: './registro-form.component.css'
})
export class RegistroFormComponent {

  datos: DatosRegistro = {
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    genero: '',
    fechaNacimiento: ''
  };

  errores: ErroresRegistro = {
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    genero: '',
    fechaNacimiento: ''
  };

  registroExitoso = false;
  mostrarAlerta = false;

  // ---- Validaciones individuales (se ejecutan al cambiar el foco - evento blur) ----

  validarTipoIdentificacion(): boolean {
    if (!this.datos.tipoIdentificacion || this.datos.tipoIdentificacion.trim() === '') {
      this.errores.tipoIdentificacion = 'El tipo de identificación es obligatorio';
      return false;
    }
    this.errores.tipoIdentificacion = '';
    return true;
  }

  validarNumeroIdentificacion(): boolean {
    if (!this.datos.numeroIdentificacion || this.datos.numeroIdentificacion.trim() === '') {
      this.errores.numeroIdentificacion = 'El número de identificación es obligatorio';
      return false;
    }
    this.errores.numeroIdentificacion = '';
    return true;
  }

  validarNombres(): boolean {
    const longitud = this.datos.nombres.trim().length;
    if (longitud < 1 || longitud > 20) {
      this.errores.nombres = 'El nombre debe tener entre 1 y 20 caracteres';
      return false;
    }
    this.errores.nombres = '';
    return true;
  }

  validarApellidos(): boolean {
    const longitud = this.datos.apellidos.trim().length;
    if (longitud < 1 || longitud > 20) {
      this.errores.apellidos = 'El apellido debe tener entre 1 y 20 caracteres';
      return false;
    }
    this.errores.apellidos = '';
    return true;
  }

  validarCorreo(): boolean {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!correoRegex.test(this.datos.correo)) {
      this.errores.correo = 'El correo debe tener el dominio @gmail.com';
      return false;
    }
    this.errores.correo = '';
    return true;
  }

  validarGenero(): boolean {
    if (!this.datos.genero || this.datos.genero.trim() === '') {
      this.errores.genero = 'El género es obligatorio';
      return false;
    }
    this.errores.genero = '';
    return true;
  }

  validarFechaNacimiento(): boolean {
    if (!this.datos.fechaNacimiento || this.datos.fechaNacimiento.trim() === '') {
      this.errores.fechaNacimiento = 'La fecha de nacimiento es obligatoria y debe ser válida';
      return false;
    }

    const fechaNacimiento = new Date(this.datos.fechaNacimiento);
    const fechaActual = new Date();

    if (isNaN(fechaNacimiento.getTime())) {
      this.errores.fechaNacimiento = 'La fecha de nacimiento es obligatoria y debe ser válida';
      return false;
    }

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    if (edad < 0 || edad > 120) {
      this.errores.fechaNacimiento = 'La fecha de nacimiento es obligatoria y debe ser válida';
      return false;
    }

    this.errores.fechaNacimiento = '';
    return true;
  }

  // ---- Validación completa (se ejecuta al dar clic en Registrar) ----

  validarFormulario(): boolean {
    const tipoIdentificacionValida = this.validarTipoIdentificacion();
    const identificacionValida = this.validarNumeroIdentificacion();
    const nombresValidos = this.validarNombres();
    const apellidosValidos = this.validarApellidos();
    const correoValido = this.validarCorreo();
    const generoValido = this.validarGenero();
    const fechaNacimientoValida = this.validarFechaNacimiento();

    return tipoIdentificacionValida && identificacionValida && nombresValidos &&
      apellidosValidos && correoValido && generoValido && fechaNacimientoValida;
  }

  onSeleccionarGenero(valor: string): void {
    this.datos.genero = valor;
    this.validarGenero();
  }

  registrar(): void {
    if (this.validarFormulario()) {
      this.registroExitoso = true;
      this.mostrarAlerta = false;

      setTimeout(() => {
        this.registroExitoso = false;
        this.resetearFormulario();
      }, 3000);
    } else {
      this.mostrarAlerta = true;
      this.registroExitoso = false;
    }
  }

  resetearFormulario(): void {
    this.datos = {
      tipoIdentificacion: '',
      numeroIdentificacion: '',
      nombres: '',
      apellidos: '',
      correo: '',
      genero: '',
      fechaNacimiento: ''
    };
    this.errores = {
      tipoIdentificacion: '',
      numeroIdentificacion: '',
      nombres: '',
      apellidos: '',
      correo: '',
      genero: '',
      fechaNacimiento: ''
    };
  }
}
