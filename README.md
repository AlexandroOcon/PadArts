# Proyecto de Kevin Alexandro Ocon Zaragoza

Este proyecto fue creado por Kevin Alexandro Ocon Zaragoza utilizando React Native con Expo, JavaScript y Strapi.

## Ejecución

Para ejecutar este proyecto, sigue estos pasos:

1. Instala Node.js en tu sistema si aún no lo has hecho.
2. Clona este repositorio en tu computadora.
3. Abre una terminal en la carpeta del proyecto.
4. Ejecuta el comando `npm install` para instalar todas las dependencias.
5. Luego, ejecuta `npx expo start` para iniciar el proyecto. Esto abrirá Expo en tu navegador y te proporcionará un código QR que puedes escanear con la aplicación móvil Expo para ver el proyecto en tu dispositivo.

## Instalación de Strapi

Este proyecto utiliza Strapi como su backend. Para instalar Strapi, sigue estos pasos:

- Clona el repositorio de Strapi desde el siguiente enlace: [Instalación de Strapi](https://github.com/AlexandroOcon/Api_PadArt.git).
- Sigue las instrucciones proporcionadas en el repositorio de Strapi para instalar y configurar el backend.
- Una vez que hayas configurado Strapi, necesitarás hacer algunos cambios en tu proyecto React Native para conectarte a la API de Strapi.

## Configuración de la conexión a Strapi en tu proyecto React Native

En tu proyecto React Native, necesitarás hacer los siguientes cambios para conectar tu proyecto a tu instancia de Strapi:

```javascript
// En el archivo middlewares.js en tu proyecto Strapi, asegúrate de cambiar la configuración de CORS para permitir el acceso desde tu aplicación móvil.
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:8081'], // Cambia esto a la URL de tu aplicación móvil o a exp://192.168.100.6:8081 si estás usando tu teléfono celular.
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

