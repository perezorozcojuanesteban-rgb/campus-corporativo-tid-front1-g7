// leer los cursos desde el local 
export function cargarCursosLocalStorage() {
    return JSON.parse(localStorage.getItem("cursos")) || [];
}

// cuenta por categoria
export function contarCursosPorCategoria() {
    const cursos = cargarCursosLocalStorage();
    const contadores = {};

    cursos.forEach(curso => {
        const cat = curso.categoria || "Sin categoría";
        contadores[cat] = (contadores[cat] || 0) + 1;
    });

    return contadores;
}

// Funcio de renderizar catalogo hay que modificar
export function renderizarCatalogo(contenedor, categoria = "Todos") {

    let cursos = cargarCursosLocalStorage();

    contenedor.innerHTML = "";

    for (let i = 0; i < cursos.length; i++) {

        // filtrado por categoria
        if (categoria !== "Todos" && cursos[i].categoria !== categoria) {
            continue;
        }

        const tarjeta = document.createElement("a");
        tarjeta.classList.add("tarjeta");

        // Redireccionamiento
        tarjeta.href = cursos[i].pagina;

        tarjeta.innerHTML = `
              <h3>${cursos[i].titulo}</h3>
              <p><strong>Categoría:</strong> ${cursos[i].categoria}</p>
              <p>${cursos[i].descripcion}</p>
              <iframe width="100%" height="200"
                  src="${cursos[i].video || ''}"
                  frameborder="0"
                  allowfullscreen></iframe>
          `;

        contenedor.appendChild(tarjeta);
    }
}