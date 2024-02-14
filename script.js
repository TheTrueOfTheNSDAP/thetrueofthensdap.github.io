document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar el contenido de la categoría seleccionada
    function mostrarCategoria(categoria) {
        // Ocultar todos los contenidos de categoría
        const categorias = document.querySelectorAll('.categoria-content');
        categorias.forEach(function(element) {
            element.style.display = 'none';
        });

        // Mostrar el contenido de la categoría correspondiente
        const categoriaContent = document.getElementById(categoria + '-content');
        if (categoriaContent) {
            categoriaContent.style.display = 'block';
        }
    }

    // Obtener todos los enlaces de categoría
    const categoriaLinks = document.querySelectorAll('.categoria-link');

    // Agregar un event listener a cada enlace de categoría
    categoriaLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const categoria = this.getAttribute('data-categoria');
            window.location.hash = categoria; // Modifica la URL según la categoría seleccionada
            mostrarCategoria(categoria); // Mostrar el contenido de la categoría
        });
    });

    // Event listener para el enlace de "Toda la información" en la categoría de Nazismo
    const informacionNazismoLink = document.getElementById('informacion-nazismo-link');
    if (informacionNazismoLink) {
        informacionNazismoLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Mostrar el texto cuando se hace clic en "Toda la información"
            const informacionNazismoTexto = document.getElementById('informacion-nazismo-texto');
            if (informacionNazismoTexto) {
                informacionNazismoTexto.style.display = 'block'; // Mostrar el texto "Hola"
            }
        });
    }
});