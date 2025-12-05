import { contarCursosPorCategoria } from "../helpers/helpers.js";

export function mostrarContadores() {
    const contadores = contarCursosPorCategoria();

    // Selecciona todos los elementos que tengan data-categoria
    document.querySelectorAll("[data-categoria]").forEach(el => {
        const categoria = el.getAttribute("data-categoria");
        const valor = contadores[categoria] || 0;
        el.textContent = `(${valor})`;
    });
}