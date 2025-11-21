// src/controllers/main.js
import { cursos } from "../models/modelo-cursos.js";

// --- LÓGICA DE ARRANQUE GLOBAL ---
export function iniciarApp() {

    console.log(" [Main] Iniciando app...");

    // Revisar si ya existen cursos en localStorage
    const cursosLS = localStorage.getItem("cursos");

    if (!cursosLS) {
        console.log(" No existen cursos en localStorage. Cargando semilla...");
        localStorage.setItem("cursos", JSON.stringify(cursos));
    } else {
        console.log(" Cursos ya existen en localStorage. No se sobrescriben.");
    }
}

// Ejecutar de inmediato al cargar main.js
iniciarApp();