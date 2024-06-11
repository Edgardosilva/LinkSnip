# Acortador de Enlaces: LinkSlash

Este es un proyecto de acortador de enlaces que te permite generar enlaces cortos a partir de URLs largas. Utiliza tecnologías como Node.js, Express.js, MySQL para el Backend, Vite y React.js para el desarrollo frontend, respectivamente.

Es un Proyecto FullStack, por lo que el front se realizó previamente. Puedes ver el desarrollo frontend [aquí](https://github.com/Edgardosilva/LinkSlashFront).

## Características

- Generación de enlaces cortos a partir de URLs largas.
- Redirección automática desde los enlaces cortos a las URLs originales.
- Panel de administración para gestionar enlaces cortos (próximamente).

## Tecnologías Utilizadas

- **Backend:**
  - Node.js
  - Express.js
  - Vercel (Despliegue API)

- **Base de Datos:**
  - MySQL (Despliegue en Railway)
  
- **Frontend:**
  - Vite
  - React.js
  - Vercel (Despliegue front)

## Instalación

1. Clona este repositorio.
   
3. Configura Base de datos: Importa tu link de conexión a tu base de datos en la ruta database/db.js, o utiliza variables de entorno separadas si corresponden (bd configurada para bases de datos MySQL)

4. Instala las dependencias del backend:

    ```bash
    npm install
    ```

5. Ejecuta el servidor de desarrollo:

    ```bash
    npm run dev
    ```

6. Visita `http://localhost:3000` en tu navegador

## Demo

Puedes acceder a una demostración en vivo del proyecto [aquí](https://linkslash-roan.vercel.app/).

## Contribuir

¡Contribuciones son bienvenidas! Si tienes alguna idea para mejorar este proyecto, por favor abre un issue para discutirla.
