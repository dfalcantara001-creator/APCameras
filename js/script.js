// DATOS PARA FILTRAR //

// Primer filtro: camaras //

const dwdiego = [

//camaras//

{id: 1, name:"CANON 1", image: "img/Imagen 1.jpg", genero: "camaras", description: "Esta es una camara de la marca Canon con la que podras capturar imagenes con la mejor calidad."},
{id: 2, name:"Camara con microfono 1", image: "img/Imagen 3.jpg", genero: "camaras", description: "Esta es una camara con microfono con la que podras capturar todos los sonidos que quieras al mismo tiempo que capturas las tomas."},
{id: 3, name:"IMAX 1", image: "img/Imagen 8.jpg", genero: "camaras", description: "Esta es una camara de la marca IMAX, esta camara cuenta con un certificado que garantiza la calidad de la misma."},
{id: 4, name:"CANON 2", image: "img/Imagen 7.jpg", genero: "camaras", description: "Esta es una camara cinematografica de la marca CANON con la que podras retratar tus ideas y obtener unos metrajes con una  calidad increible."},

//detalles//

{id: 5, name:"Camara con microfono 2", image: "img/Imagen 4.jpg", genero: "unete", description: " Esta es una camara de la marca Sony con la que podras capturar imagenes con la mejor calidad."},
{id: 6, name:"Camara cinematografica 1", image: "img/Imagen 5.jpg", genero: "unete", description: "Esta es una camara especializada en capturar tomas complejas y una calidad mas alta."},
{id: 7, name:"ARRI 1", image: "img/Imagen 6.jpg", genero: "unete", description: "Esta es una camara de la marca ARRI especializada en capturar tomas complejas con una calidad mas alta."},
{id: 8, name:"Sony 1", image: "img/Imagen 2.jpg", genero: "unete", description: "Esta es una camara de la marca SONY especializada en capturar tomas complejas y tiene un manejo mas sencillo."},
];

// Obtener los contenedores y botones del DOM
const dwdiegoContainer = document.getElementById("camaras-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    const dwdiegoToRender = genero === "all"
        ? dwdiego
        : dwdiego.filter(dw => dw.genero === genero);

    // Limpia el contenedor antes de renderizar
    dwdiegoContainer.innerHTML = '';


    if (!dwdiegoToRender || dwdiegoToRender.length === 0) {
        dwdiegoContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

      // Crea y agrega las tarjetas 
   dwdiegoToRender.forEach(dw => {
        const cardHtml = `
            <figure class="camara-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt="APCameras vende, nombre: ${dw.name}">
                <figcaption>
                ${dw.name}
            </figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `;
        dwdiegoContainer.innerHTML += cardHtml;
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


    