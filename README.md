# Información de la aplicación
"Vivamos Bariloche!" es un proyecto desarrollado para el curso de React JS de CoderHouse.

## Descripción general
#### Objetivo de la aplicación
Esta aplicación pretende brindar una experiencia agradable al usuario. Ofrece una multiplicidad de productos y busca la interactividad con el usuario a través de una interfaz amigable.

#### Contenido de la aplicación
Contiene una página de inicio, otra para los productos (ítems), otra para las categorías de los ítems (secciones), y otra para el carrito de compras que posee un resumen de la compra y un formulario para realizar una compra.
Es una aplicación con una estructura básica, un e-commerce, cuyo fin es la compra-venta de productos típicos de la región de Bariloche (Provincia de Río Negro, Argentina). 
Permite seleccionar cualquier producto con la cantidad deseada. E incluso esta cantidad se puede incrementar dentro de carrito de compras (Cart).

## Funcionamiento del e-commerce
1. Al iniciar la aplicación, se muestra la página de inicio.
2. Al hacer click en una categoría, se muestra la lista de productos de esa categoría.
3. Al hacer click en un producto, se muestra la información del producto.
4. Al hacer click en el botón "Agregar al carrito" del producto, se agrega el producto al carrito de compras.
5. Al hacer click en el botón "Comprar" del carrito de compras, se muestra el formulario para realizar la compra.
6. Al hacer click en el botón "Realizar compra" del formulario, se realiza la compra.

## Flujo de compra
![flujo de compra](https://github.com/GerardoCoria/VivamosBariloche-Coria/blob/main/src/media/Multimedia2.gif?raw=true)

## Uso e instalación
Para su uso, se debe instalar el paquete de npm:
```
npm install
```
Si desea probar la aplicación, debe ejecutar el comando:
```
$ git clone https://github.com/GerardoCoria/VivamosBariloche-Coria
```
Luego ejecute:
```
$ cd VivamosBariloche-Coria
```
Para iniciar la aplicación:
```
$ npm start
```

#### NodeJS
Se ejecuta NodeJS para descargar los módulos de React y React-Router, usando la herramienta npm. 
Y para "levantar" la aplicación, esto es, inicializarla. 
Acceda a la aplicación desde la URL:
[localhost:3000](localhost:3000)

Si no posee NodeJS, se debe instalarlo:
1. Descargar NodeJS: https://nodejs.org/es/
2. Descargar la última versión de Node.js
3. Ejecutar el archivo descargado.

Para instalar la aplicación React, se instaló el paquete de npm:
```
npm install -g create-react-app
```
Para crear la aplicación React, se ejecutó el comando:
```
create-react-app nombre-de-la-aplicación
```
## Librerías usadas
#### React
React JS es una biblioteca para desarrollo web. Busca darle una alta performance a la aplicación web.

#### React Router DOM
Para usarlo, se descargó el paquete de npm:
```
npm install react-router-dom
```
Una vez instalado, se debe importar en el archivo que se desee usar React Router.
Luego de instalado React Router DOM, Switch fue importado para proyectar las vistas navegadas. Para navegar, se envolvió la aplicación en BrowseRouter y Link para navegar.

Se estableció una navegación dinámica mediante Id:
```
<Route path="/seccion/:id">
    <ItemListContainer/>
</Route>
<Route path="/item/:id">
    <ItemDetailContainer/>
</Route>
```
Dichos Id son recibidos como parámetros con "UseParams".

#### Firebase
Se empleó este servicio provisto por Google para la base de datos de la aplicación. En ella fueron guardados los datos de los productos y las categorías.
Este servicio es importante dado que permite realizar un filtrado por categoría. Además, facilita realizar una búsqueda de productos de forma sencilla.
Y genera un Id único autogenerado para la compra. 
Para usar Firebase, vaya a la [página de Firebase](https://firebase.google.com/) y con su cuenta de Google configure la consola. Luego cree un proyecto y acceda al panel de Firestore.
La instalación de Firebase se realiza con el comando:
```
npm install firebase@8.9.1 --save
```

La integración de Firebase fue realizada a través del archivo firebase.js con las api keys.

#### CSS
Aunque CSS no es una librería (es un lenguaje de diseño gráfico para dar estilos a nuestras webs) se consideró adecuado sólo usar CSS (y ningún framework o librería) para ejercitar las habilidades en CSS. 
Además, cada framework tiene sus ventajas, pero también sus limitaciones. Por lo que, al pensar en ideas más creativas, mejor usar sólo CSS. Tal como el caso de Javascript Vanilla, la mejor forma de aprender es sin usar librerías o frameworks externos.

## Convenciones
Como buenas prácticas, fueron consideradas las siguientes:

#### CamelCase
Se empleó CamelCase para los nombres de los eventos, para los id y clases de CSS.

#### Uso del Const
Las funciones se declaran con la palabra reservada "const". Ello es una convención para evitar cambiar la referencia con la que fueron inicializadas. Ello no significa que esa referencia tenga el mismo contenido, de hecho, puedo cambiarlo

#### Let
Sólo se usó "let" para declarar variables.

#### Arrow Functions
Se buscó dar simplicidad al código usando arrow functions.

#### Sugar syntax
La sintaxis sugar fue empleada para los operadores ternarios y en el spread operator.

#### JSX
Se empleó las etiquetas de auto-cerrado para los componentes, tal como se sugiere en la documentación de React.

#### Class y ClassName
Para las clases de CSS, fueron usadas las palabras claves "className" en lugar de "class". Esto es una convención para evitar confusiones con el nombre de la propiedad "class".

#### Propiedades
Para las propiedades de los componentes, la palabra "props" fue empleada.

#### Hooks
Se implementó el uso del Local Storage para guardar información del carrito, ante un cierre de la ventana o recarga de la página.

#### Promesas
Se usó las promesas para obtener los datos de Firebase.

#### Error de tipo 404
Si la aplicación no encuentra una página, se muestra un error 404 con el componente Error404.js.

#### Keys
Se identificó al Div contenedor de cada producto mapeado (esto es con la función map) con una clave única. De esa forma no habrá problemas al actualizar la lista de productos.

#### Contexto
El contexto fue usado para el carrito de compras. Para esto, se empleó el hook useContext. Y allí fue guardada la información del producto elegido y su cantidad.
Se configuró el nodo proveedor desde App.js para que sea accesible desde cualquier componente.
En el componente Contexto se guardó tanto el mínimo (1) como el máximo (10) de productos que se puede elegir para agregar al carrito.

#### Rendering condicional
Para renderizar, según la complejidad de cada componente, se usó tanto los operadores ternarios como la función if-else. 