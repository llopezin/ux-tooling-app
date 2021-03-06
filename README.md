# Bucle.app

_Una aplicaci贸n que lleva a cabo distintas tareas para la investigaci贸n UX, incluyendo Tree tests, card sorting y encuestas._

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 馃搵

_Para instalar este sorfware necesitar谩s completar las siguiente instalaciones previas_

```
Instalaci贸n de node.js en tu m谩quina local

https://nodejs.org/en/
```

### Instalaci贸n 馃敡

_Para levantar un entorno de desarrollo entorno de desarrollo ejecutandose_

_Instala el priyecto con el siguieente comando_

```
npm i
```

_Una vez instalado, levanta un servidor de desarrollo con el siguiente comando_

```
npm run start
```

_El proyecto se mostrar谩 en tu `http://localhost:4200/`_

_Para utilizar un puerto diferente usar el comando_

```
npm run ng serve --port <numero-de-puerto>
```

## Backend

_Esta aplicaci贸n utiliza la API `https://bucle-app.herokuapp.com/api`._
_Puedes instalar y ejecutar el backend del proyecto en tu m谩quina local
desde este repositorio: `https://github.com/llopezin/ux-tooling-app-api`_

_Para ejecutar la aplicaci贸n con la API ejecutandose en tu m谩quina local
deber谩s modificar todos los ficheros que contienen la url de la API por 
la URL del servidor local de la API_



## Ejecutando las pruebas 鈿欙笍

_Para ejecutar las pruebas del proyecto utilizando karma [Karma](https://karma-runner.github.io) emplear el comando_

```
npm run test
```


## Despliegue 馃摝

_Para conseguir el c贸digo de producci贸n para el despliege utilizar el siguiente comando_
_El c贸digo se genrerar谩 dentro del archivo ./dist_

```
npm run build --prod
```

## Construido con 馃洜锔?

* [Angular](https://angular.io/) - El framework web usado
* [NgRx](https://ngrx.io/docs) - Libreria para gestionar el estado global de la aplicaci贸n
* [Tailwind](https://tailwindcss.com/) - Framework css utilizado para generar estilos
* [Chart.js](https://www.chartjs.org/) - Usado para generar gr谩ficas


## Repositorio

https://github.com/llopezin/ux-tooling-app

## Autora 鉁掞笍

* **Laura L贸pez Infantes** - *Desarrollo completo* - (http://laurainfantes.netlify.app/)