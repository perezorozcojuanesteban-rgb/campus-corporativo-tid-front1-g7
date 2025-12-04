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