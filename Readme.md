# Parte Backend

Este proyecto es una API backend construida con Node.js y Express, utilizando TypeScript para añadir tipos estáticos. El proyecto también incluye integración con Stripe para gestionar pagos, Cloudinary para el manejo de imágenes, y MongoDB como base de datos.

## Tabla de Contenidos

- [Instalación del Proyecto](#instalación-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Dependencias Principales](#dependencias-principales)
- [Dependencias de Desarrollo](#dependencias-de-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación del Proyecto

Para configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/nombre-repositorio.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd nombre-repositorio
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

En este proyecto, puedes utilizar los siguientes comandos:

- `npm run dev`: Inicia el servidor de desarrollo con `nodemon` para reiniciar automáticamente al detectar cambios y escucha los eventos de Stripe.
- `npm run stripe`: Inicia el proceso de escucha para los eventos de webhook de Stripe, reenviando las solicitudes a tu servidor local.
- `npm run build`: Compila el proyecto TypeScript en JavaScript y crea la versión de producción.
- `npm start`: Inicia la aplicación utilizando el archivo compilado en la carpeta `dist`.

## Dependencias Principales

Este proyecto utiliza varias librerías esenciales para su funcionamiento:

- Express: Framework web para Node.js que facilita la construcción de APIs.
- Mongoose: Modelado de objetos para MongoDB en Node.js.
- Stripe: Integración con la API de Stripe para manejar pagos.
- Cloudinary: Servicio de gestión de imágenes en la nube.
- jsonwebtoken: Implementación de JWT (JSON Web Tokens) para autenticación.
- dotenv: Manejo de variables de entorno para la configuración de la aplicación.
- CORS: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Dependencias de Desarrollo

Herramientas utilizadas durante el desarrollo del proyecto:

- TypeScript: Añade tipos estáticos a JavaScript para un desarrollo más seguro.
- Nodemon: Reinicia automáticamente el servidor cuando se detectan cambios en los archivos fuente.
- ts-node: Permite ejecutar TypeScript directamente en Node.js sin necesidad de compilarlo previamente.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```plaintext
├── src/               # Código fuente del proyecto
│   ├── controllers/   # Controladores de la API
│   ├── models/        # Modelos de datos (MongoDB)
│   ├── routes/        # Rutas de la API
│   ├── middlewares/   # Middlewares para la validación, autenticación, etc.
│   └── index.ts       # Punto de entrada principal de la aplicación
├── dist/              # Archivos compilados de TypeScript a JavaScript
├── .env               # Archivo de configuración de variables de entorno
├── package.json       # Archivo de configuración de dependencias
└── README.md          # Este archivo
```

