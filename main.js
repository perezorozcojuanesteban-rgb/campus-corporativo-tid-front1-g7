import { cursos } from "../models/modelo-cursos.js";

export function iniciarApp() {
    const cursosLS = localStorage.getItem("cursos");

    if (!cursosLS) {
        localStorage.setItem("cursos", JSON.stringify(cursos));
    }
}

iniciarApp();
