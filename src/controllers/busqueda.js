export function activarBusqueda() {

    const input = document.querySelector(".search-bar input");
    const contenedor = document.querySelector(".contenedor-cursos");

    if (!input || !contenedor) return;

    input.addEventListener("keyup", () => {

        let texto = input.value.toLowerCase();
        let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

        let filtrados = cursos.filter(curso =>
            curso.titulo.toLowerCase().includes(texto)
        );

        contenedor.innerHTML = "";

        filtrados.forEach(curso => {

            const tarjeta = document.createElement("a");
            tarjeta.classList.add("tarjeta");
            tarjeta.href = curso.pagina;

            tarjeta.innerHTML = `
                <h3>${curso.titulo}</h3>
                <p><strong>Categoría:</strong> ${curso.categoria}</p>
                <p>${curso.descripcion}</p>
            `;

            contenedor.appendChild(tarjeta);
        });

    });
}