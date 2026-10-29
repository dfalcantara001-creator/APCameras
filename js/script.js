// DATOS PARA FILTRAR //

// Primer filtro: camaras //

const dwdiego = [

//camaras//

{id: 1, name:"CANON 1", image: "img/Imagen 1.jpg", genero: "camaras", description: "Esta es una camara de la marca Canon con la que podras capturar imagenes con la mejor calidad."},
{id: 2, name:"Camara con microfono 1", image: "img/Imagen 3.jpg", genero: "camaras", description: "Esta es una camara con microfono con la que podras capturar todos los sonidos que quieras al mismo tiempo que capturas las tomas."},
{id: 3, name:"IMAX 1", image: "img/Imagen 8.jpg", genero: "camaras", description: "Esta es una camara de la marca IMAX, esta camara cuenta con un certificado que garantiza la calidad de la misma."},
{id: 4, name:"CANON 2", image: "img/Imagen 7.jpg", genero: "camaras", description: "Esta es una camara cinematografica de la marca CANON con la que podras retratar tus ideas y obtener unos metrajes con una  calidad increible."},

//detalles//

{id: 5, name:"Camara con microfono 2", image: "img/Imagen 4.jpg", genero: "detalles", description: " Esta es una camara de la marca Sony con la que podras capturar imagenes con la mejor calidad."},
{id: 6, name:"Camara cinematografica 1", image: "img/Imagen 5.jpg", genero: "detalles", description: "Esta es una camara especializada en capturar tomas complejas y una calidad mas alta."},
{id: 7, name:"ARRI 1", image: "img/Imagen 6.jpg", genero: "detalles", description: "Esta es una camara de la marca ARRI especializada en capturar tomas complejas con una calidad mas alta."},
{id: 8, name:"Sony 1", image: "img/Imagen 2.jpg", genero: "detalles", description: "Esta es una camara de la marca SONY especializada en capturar tomas complejas y tiene un manejo mas sencillo."},
];

// Obtener los contenedores y botones del DOM
const dwdiegoContainer = document.getElementById("camaras-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwdiegoToRender = [];
    if (genero === "all") {
        dwdiegoToRender = dwdiego;
    } else {
        dwdiegoToRender = dwdiego.filter(Dwdiego => Dwdiego.genero === genero);
    }



}