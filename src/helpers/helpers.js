// src/helpers/helpers.js

export function renderizarCatalogo(contenedor, categoria = "Todos") {

    // Leer cursos desde localStorage (fuente oficial)
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    contenedor.innerHTML = "";

    for (let i = 0; i < cursos.length; i++) {

        if (categoria !== "Todos" && cursos[i].categoria !== categoria) {
            continue;
        }

        const tarjeta = document.createElement("a");
        tarjeta.classList.add("tarjeta");
        tarjeta.href = cursos[i].pagina;

        tarjeta.innerHTML = `
            <h3>${cursos[i].titulo}</h3>
            <p><strong>Categoría:</strong> ${cursos[i].categoria}</p>
            <p>${cursos[i].descripcion}</p>

            <iframe width="560" height="315"
                src="${cursos[i].video}"
                frameborder="0"
                allowfullscreen>
            </iframe>
        `;

        contenedor.appendChild(tarjeta);
    }
}