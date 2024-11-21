// JavaScript para añadir la clase 'fixed' al logo al hacer scroll
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const logoText = document.getElementById('logoText');
    if (window.scrollY > 50) { // Ajusta el valor para activar el efecto cuando desees
        logo.classList.add('fixed');
        logoText.classList.add('fixed');
    } else {
        logo.classList.remove('fixed');
        logoText.classList.remove('fixed');
    }
});

// Crear el cursor personalizado
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Mover el cursor personalizado con el ratón
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cambiar el tamaño del cursor al pasar sobre enlaces
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
});

// Manejo del scroll para mostrar la nueva sección
window.addEventListener('scroll', function() {
    const nuevaSeccion = document.getElementById("nuevaSeccion");
    if (window.scrollY > 1100) { // Cambia 600 por el valor donde quieres que aparezca
        nuevaSeccion.classList.add("visible");
    } else {
        nuevaSeccion.classList.remove("visible");
    }
});

// JavaScript para añadir la clase 'fixed' al logo al hacer scroll
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const logoText = document.getElementById('logoText');
    if (window.scrollY > 50) { // Ajusta el valor para activar el efecto cuando desees
        logo.classList.add('fixed');
        logoText.classList.add('fixed');
    } else {
        logo.classList.remove('fixed');
        logoText.classList.remove('fixed');
    }
});


// Manejo del scroll para mostrar la imagen fija
window.addEventListener('scroll', function() {
    const fixedImage = document.getElementById("fixedImage");
    if (window.scrollY > 400) { // Cambia 800 por el valor donde quieres que aparezca
        fixedImage.style.opacity = 1; // Muestra la imagen
    } else {
        fixedImage.style.opacity = 0; // Oculta la imagen
    }
});



// Detectamos el evento de scroll
window.addEventListener('scroll', function() {
    const servicio1 = document.getElementById('servicio1');
    const servicio2 = document.getElementById('servicio2');
    const servicio3 = document.getElementById('servicio3');
    
    const scrollPosition = window.scrollY;
    
    // Aparece o desaparece el servicio 1
    if (scrollPosition > 500 && scrollPosition < 1600) {
        servicio1.classList.add('visible');
    } else {
        servicio1.classList.remove('visible');
    }
    
    // Aparece o desaparece el servicio 2
    if (scrollPosition > 700 && scrollPosition < 1600) {
        servicio2.classList.add('visible');
    } else {
        servicio2.classList.remove('visible');
    }

    // Aparece o desaparece el servicio 3
    if (scrollPosition > 900 && scrollPosition < 1600) {
        servicio3.classList.add('visible');
    } else {
        servicio3.classList.remove('visible');
    }

    if (scrollPosition > 1100 && scrollPosition < 1600) {
        servicio4.classList.add('visible');
    } else {
        servicio4.classList.remove('visible');
    }
    
    // Aparece o desaparece el servicio 2
    if (scrollPosition > 1300 && scrollPosition < 1600) {
        servicio5.classList.add('visible');
    } else {
        servicio5.classList.remove('visible');
    }

    // Aparece o desaparece el servicio 3
    if (scrollPosition > 1500 && scrollPosition < 1600) {
        servicio6.classList.add('visible');
    } else {
        servicio6.classList.remove('visible');
    }
});

// Detectamos el evento de scroll para mostrar/ocultar la imagen
window.addEventListener('scroll', function() {
    const imagenScroll = document.getElementById('imagenScroll');
    const scrollPosition = window.scrollY;

    // Si hemos pasado el umbral, mostramos la imagen
    if (scrollPosition > 100) { // Ajusta este valor según cuándo quieras que aparezca
        imagenScroll.classList.add('visible');
    } else {
        imagenScroll.classList.remove('visible');
    }
});


// Obtener el contenedor de la imagen
const imageContainer = document.getElementById('scroll-image-container');

// Detectar el scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Verificar si ha llegado al punto de la animación
    if (scrollPosition >= 900) {
        imageContainer.classList.add('show'); // Añadir clase para mostrar
        imageContainer.classList.add('fixed'); // Hacer la imagen fija
    } else {
        imageContainer.classList.remove('show'); // Ocultar antes de 900px
        imageContainer.classList.remove('fixed'); // Eliminar posición fija
    }
});


// Obtener todos los elementos de servicios
const servicios = document.querySelectorAll('.servicio');
const imageOverlay = document.getElementById('imageOverlay');
const closeButton = document.getElementById('closeButton');

// Agregar evento de clic a cada div de servicio
servicios.forEach((servicio) => {
    servicio.addEventListener('click', () => {
        // Obtener el fondo del div clicado
        const backgroundImage = window.getComputedStyle(servicio).backgroundImage;

        // Crear una imagen dentro del overlay
        const imageElement = document.createElement('img');
        imageElement.src = backgroundImage.slice(5, -2); // Eliminar 'url("...")'

        // Limpiar cualquier imagen previa y añadir la nueva
        imageOverlay.innerHTML = '';
        imageOverlay.appendChild(imageElement);
        imageOverlay.appendChild(closeButton);

        // Mostrar el overlay
        imageOverlay.classList.add('visible');
    });
});

// Cerrar el overlay al hacer clic en el botón de cierre
closeButton.addEventListener('click', () => {
    imageOverlay.classList.remove('visible');
});

// Cerrar el overlay al hacer clic fuera de la imagen
imageOverlay.addEventListener('click', (e) => {
    if (e.target === imageOverlay) {
        imageOverlay.classList.remove('visible');
    }
});





