# Bucle.app

_Una aplicación que lleva a cabo distintas tareas para la investigación UX, incluyendo Tree tests, card sorting y encuestas._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Para instalar este sorfware necesitarás completar las siguiente instalaciones previas_

```
Instalación de node.js en tu máquina local

https://nodejs.org/en/
```

### Instalación 🔧

_Para levantar un entorno de desarrollo entorno de desarrollo ejecutandose_

_Instala el priyecto con el siguieente comando_

```
npm i
```

_Una vez instalado, levanta un servidor de desarrollo con el siguiente comando_

```
npm run start
```

_El proyecto se mostrará en tu `http://localhost:4200/`_

_Para utilizar un puerto diferente usar el comando_

```
npm run ng serve --port <numero-de-puerto>
```

## Backend

_Esta aplicación utiliza la API `https://bucle-app.herokuapp.com/api`._
_Puedes instalar y ejecutar el backend del proyecto en tu máquina local
desde este repositorio: `https://github.com/llopezin/ux-tooling-app-api`_

_Para ejecutar la aplicación con la API ejecutandose en tu máquina local
deberás modificar todos los ficheros que contienen la url de la API por 
la URL del servidor local de la API_



## Ejecutando las pruebas ⚙️

_Para ejecutar las pruebas del proyecto utilizando karma [Karma](https://karma-runner.github.io) emplear el comando_

```
npm run test
```


## Despliegue 📦

_Para conseguir el código de producción para el despliege utilizar el siguiente comando_
_El código se genrerará dentro del archivo ./dist_

```
npm run build --prod
```

## Construido con 🛠️

* [Angular](https://angular.io/) - El framework web usado
* [NgRx](https://ngrx.io/docs) - Libreria para gestionar el estado global de la aplicación
* [Tailwind](https://tailwindcss.com/) - Framework css utilizado para generar estilos
* [Chart.js](https://www.chartjs.org/) - Usado para generar gráficas


## Repositorio

https://github.com/llopezin/ux-tooling-app

## Autora ✒️

* **Laura López Infantes** - *Desarrollo completo* - (http://laurainfantes.netlify.app/)