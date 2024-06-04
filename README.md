Proyecto de Kevin Alexandro Ocon Zaragoza
Este proyecto fue creado por Kevin Alexandro Ocon Zaragoza utilizando React Native con Expo, JavaScript y Strapi.

Ejecución
Para ejecutar este proyecto, sigue estos pasos:

Instala Node.js en tu sistema si aún no lo has hecho.
Clona este repositorio en tu computadora.
Abre una terminal en la carpeta del proyecto.
Ejecuta el comando npm install para instalar todas las dependencias.
Luego, ejecuta npx expo start para iniciar el proyecto. Esto abrirá Expo en tu navegador y te proporcionará un código QR que puedes escanear con la aplicación móvil Expo para ver el proyecto en tu dispositivo.
Instalación de Strapi
Este proyecto utiliza Strapi como su backend. Para instalar Strapi, sigue estos pasos:

Clona el repositorio de Strapi desde el siguiente enlace: Clona el repositorio de Strapi desde el siguiente enlace: [Instalación de Strapi](https://github.com/AlexandroOcon/Api_PadArt.git).
Sigue las instrucciones proporcionadas en el repositorio de Strapi para instalar y configurar el backend.
Una vez que hayas configurado Strapi, necesitarás hacer algunos cambios en tu proyecto React Native para conectarte a la API de Strapi.
Configuración de la conexión a Strapi en tu proyecto React Native
En tu proyecto React Native, necesitarás hacer los siguientes cambios para conectar tu proyecto a tu instancia de Strapi:

En el archivo middlewares.js en tu proyecto Strapi, asegúrate de cambiar la configuración de CORS para permitir el acceso desde tu aplicación móvil.
javascript
Copiar código
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:8081'], // Cambia esto a la URL de tu aplicación móvil
    //Si quieres cambiar a tu celular usa exp://192.168.100.6:8081
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
Cambia http://localhost:8081 a la URL de tu aplicación móvil o a exp://192.168.100.6:8081 si estás usando tu teléfono celular.
Demostración
Para una demostración de lo que hace este proyecto, puedes ver este video explicativo en YouTube: [Demostración del Proyecto](https://www.youtube.com/watch?v=8tUrLx6-ceI).
