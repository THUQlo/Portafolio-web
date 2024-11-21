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

// Cambiar el tamaño del cursor al pasar sobre enlaces y botones
const links = document.querySelectorAll('a, button');
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
    if (window.scrollY > 600) { // Cambia 600 por el valor donde quieres que aparezca
        nuevaSeccion.classList.add("visible");
    } else {
        nuevaSeccion.classList.remove("visible");
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