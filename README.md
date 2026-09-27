# Clínica Piedra Verde - Aplicación Angular

Aplicación web para la Clínica Piedra Verde, construida en Angular (standalone components), 
Bootstrap 5 y Font Awesome, a partir del sitio HTML/CSS/JS original.

## Estructura de componentes

- `src/app/components/header` — Encabezado
- `src/app/components/navbar` — Barra de navegación
- `src/app/components/carrusel` — Carrusel (sección 1)
- `src/app/components/medicos` — Médicos por especialidad (sección 2)
- `src/app/components/registro-form` — Formulario de registro con validación en TypeScript (sección 3)
- `src/app/components/footer` — Pie de página

Cada componente está formado por: vista (`.html`), hoja de estilos (`.css`) y lógica de negocio (`.ts`).
Las imágenes de la aplicación están en `public/assets/img/`.

## Cómo ejecutar

```bash
npm install
npm start
```

Luego abrir http://localhost:4200/

## Cómo compilar

```bash
npm run build
```

Los archivos generados quedan en `dist/clinica-piedra-verde/browser`.

## Funcionalidades

- Carrusel de imágenes (Bootstrap carousel) en la sección "Sobre Nosotros".
- Listado de especialidades: al hacer clic se muestra la descripción correspondiente.
- Listado de médicos por especialidad, responsive (1/2/3/4 columnas según el tamaño de pantalla).
- Formulario de registro con validaciones en TypeScript:
  - Al cambiar el foco (evento `blur`) de cada campo.
  - Al hacer clic en el botón "Registrar" (valida todo el formulario antes de enviarlo).
- Diseño responsive verificado en móvil, tablet y escritorio.

Autor: Nicolás Rocha Gutiérrez
